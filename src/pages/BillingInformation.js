import React , {useState, useEffect} from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../components/ErrorMessage";
import { saveOrderBillingInfo } from "../services/billing";
import { initAxios } from "../helper-functions/initAxios";
import Banner from "../components/Layout/Banner";

const emailRegex = /^(?=.{10,200}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const billingInfoSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "Minimum 3 characters are required!")
    .max(50, "Maximum 50 characters are allowed!")
    .required("First Name is required"),
  lastName: Yup.string().min(3, "Minimum 3 characters are required!").max(50, "Maximum 50 characters are allowed!").required("Last Name is required"),
  contactNo: Yup.string().min(10, "Too Short!").max(20, "Too Long!"),
  address1: Yup.string().min(5, "Minimum 5 characters are required!").max(200, "Maximum 200 characters are allowed!").trim().required("Address1 is required"),
  address2: Yup.string().max(200, "Maximum 200 characters are allowed!").trim(),
  email: Yup.string().email("Invalid Email Format!").required("Email is required").matches(emailRegex, 'Invalid Email Format!'),
});

const BillingInformation = () => {
  const navigate = useNavigate();
  const { user: userData } = useSelector((state) => state.auth);
  const { buyingDetails,cartDetails } = useSelector((state) => state.buyingDetails);
  const [contact, setContact] = useState("");
  const handleContactChange = (e) => {
    let input = e.target.value;
    let cleanedInput = input.replace(/\D/g, "");
  
    let formattedValue = "";
  
    if (cleanedInput.length >= 3) {
      formattedValue += `(${cleanedInput.slice(0, 3)})`;
  
      if (cleanedInput.length > 3) {
        formattedValue += `-${cleanedInput.slice(3, 6)}`;
      }
  
      if (cleanedInput.length > 6) {
        formattedValue += `-${cleanedInput.slice(6,19)}`;
      }
      
    } else {
      formattedValue = cleanedInput;
    }
  
    setContact(formattedValue);
    formik.setFieldValue("contactNo", formattedValue);
  };
  
  const onSubmitHandler = () => {
    formik.submitForm();
   
  };

  const formik = useFormik({
    initialValues: {
      orderId:buyingDetails?.details?.orderId,
      firstName: "",
      lastName: "",
      contactNo: "",
      email: userData.email,
      address1: "",
      address2: "",
    },
    validationSchema: billingInfoSchema,
    onSubmit: async (values) => {
      try {

        const response = await saveOrderBillingInfo(values);
        let isInfoInserted = response.data.insertStatus
        if(isInfoInserted===1)navigate("/checkout")
      } catch (error) {
        console.error("", error);
      } 
    },
  });
  useEffect(() => {
    initAxios()
  }, []);
  return (
    <>

      <Banner bannerTitle="Buying" classes="buying"/>

      <section>
        <div className="container">
          <div className="row mt-4 ">
            <div className="col-lg-12">
              <div className="wrapings-box">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="childex-wrap">
                      <div className="cart-bocx">
                        <h2 className="num-cart ">1</h2>
                      </div>
                      <div className="cart-txt">
                        <h2 className="carts-text ">Customer Order</h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="childex-wrap">
                      <div className="cart-bocx">
                        <h2 className="num-cart active">2</h2>
                      </div>
                      <div className="cart-txt">
                        <h2 className="carts-text active">Buying Detail</h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    {" "}
                    <div className="childex-wrap">
                      <div className="cart-bocx">
                        <h2 className="num-cart">3</h2>
                      </div>
                      <div className="cart-txt">
                        <h2 className="carts-text">Payment</h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="bg-data">
                <div className="order-wraprs">
                  <div className="order-s">
                    <h2 className="order-txt">Buying Details</h2>
                  </div>
                  {/* <div className="order-child">
                    <h2 className="edit_txt">
                      <span className="edit-icon">
                        <i className="fa fa-pencil" aria-hidden="true"></i>
                      </span>
                      &nbsp; &nbsp; Add Information{" "}
                    </h2>
                  </div> */}
                </div>

                <div className="col-lg-8">
                  <div className="row">
                    <form  onSubmit={formik.handleSubmit}>
                    <div className="d-flex ">
                    <div className="col-lg-6 me-1">
                      <div className="form-group custom-lab">
                        <label htmlFor="name">First Name</label>
                        <input
                          type="text"
                          name="firstName"
                          className={`form-control mb-2 mt-3 ${
                            formik.errors.firstName && formik.touched.firstName
                              ? "mb-0"
                              : " mb-2"
                          }`}
                          id="name"
                          placeholder="Enter First Name"
                          {...formik.getFieldProps("firstName")}
                        />
                        {formik.touched.firstName && formik.errors.firstName && (
                      <ErrorMessage title={formik.errors.firstName} />
                    )}
                      </div>
                    </div >
                    <div className="col-lg-6">
                      <div className="form-group custom-lab">
                        <label htmlFor="name">Last Name</label>
                        <input
                          name="lastName"
                          type="text"
                          className={`form-control mb-2 mt-3 ${
                            formik.errors.lastName && formik.touched.lastName
                              ? "mb-0"
                              : " mb-2"
                          }`}
                          id="name"
                          placeholder="Enter Last Name"
                          {...formik.getFieldProps("lastName")}
                        />
                         {formik.touched.lastName && formik.errors.lastName && (
                      <ErrorMessage title={formik.errors.lastName} />
                    )}
                      </div>
                    </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group custom-lab">
                        <label htmlFor="email">Email</label>
                        <input
                          name="email"
                          type="email"
                          className={`form-control mb-2 mt-3 ${
                            formik.errors.email && formik.touched.email
                              ? "mb-0"
                              : " mb-2"
                          }`}
                          id="email"
                          aria-describedby="emailHelp"
                          placeholder="mishainfotech@gmail.com"
                          {...formik.getFieldProps("email")}
                        />
                         {formik.touched.email && formik.errors.email && (
                      <ErrorMessage title={formik.errors.email} />
                    )}
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group custom-lab">
                        <label htmlFor="address1">Address1</label>
                        <input
                          name="address1"
                          type="text"
                          className={`form-control mb-2 mt-3 ${
                            formik.errors.address1 && formik.touched.address1
                              ? "mb-0"
                              : " mb-2"
                          }`}
                          id="address1"
                          placeholder="Enter Street Name"
                          {...formik.getFieldProps("address1")}
                        />
                         {formik.touched.address1 && formik.errors.address1 && (
                      <ErrorMessage title={formik.errors.address1} />
                    )}
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group custom-lab">
                        <label htmlFor="address2">Address2</label>
                        <input
                          name="address2"
                          type="text"
                          className="form-control mt-3 mb-2"
                          id="address2"
                          placeholder="Enter City/State"
                          {...formik.getFieldProps("address2")}
                        />
                         {formik.touched.address2 && formik.errors.address2 && (
                      <ErrorMessage title={formik.errors.address2} />
                    )}
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group custom-lab">
                        <label htmlFor="contactno">Contact No.</label>
                        <input
                          name="contactNo"
                          type="tel"
                          className="form-control mt-3 mb-2"
                          id="contactno"
                          placeholder="Enter Contact No. "
                          value={contact}
                          onChange={handleContactChange}
                        />
                         {formik.touched.contactNo && formik.errors.contactNo && (
                      <ErrorMessage title={formik.errors.contactNo} />
                    )}
                      </div>
                      {/* </form> */}
                    </div>
                    </form>
                  
                  </div>
                  
                </div>
                
              </div>

            
            </div>
            <div className="col-lg-4">
                <div className="bg-data">
                  <div className="summarys">
                    <h2 className="order-txt">Summary</h2>
                    <h3 className="summary-details">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h3>
                  </div>
                  <ul className="order-summary">
                    <li>
                      {" "}
                      <div className="totals-wrap">
                        <div className="total-h">
                          <h2 className="subtotal">Subtotal</h2>
                        </div>
                        <div className="tota-price">
                          <h2 className="tota-price">${cartDetails.subTotal}</h2>
                        </div>
                      </div>
                    </li>
                    <li>
                      {" "}
                      <div className="totals-wrap">
                        <div className="total-h">
                          <h2 className="subtotal">Discount</h2>
                        </div>
                        <div className="tota-price">
                          <h2 className="tota-price">${cartDetails.discount}</h2>
                        </div>
                      </div>
                    </li>
                  </ul>

                  <div className="total-bottom custom-hei-mar">
                    <hr />
                    <div className="totals-wrap">
                      <div className="total-h">
                        <h2 className="subtotal">Total</h2>
                      </div>
                      <div className="tota-price">
                        <h2 className="tota-price">${cartDetails.total}</h2>
                      </div>
                    </div>
                  </div>
                
                </div>
                <div className="add-to-favorite">
                    <button
                      type="button"
                      className="btn btn-primary w-100 btn-one search-text  "
                      onClick={onSubmitHandler}
                    >
                      Checkout<span></span>
                    </button>
                  </div>
              </div>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default BillingInformation;
