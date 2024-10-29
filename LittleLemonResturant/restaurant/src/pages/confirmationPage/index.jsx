import { Main, useFormData } from "../../components/MainSection";
import OrderSuccess from "../../components/OrderSuccess";
import RestaurantArea from "../../components/ResturantArea";
import TestmonialSection from "../../components/Testmonial";
import "./style.css";

const ConfirmationPage = () => {
  const { data } = useFormData();
  console.log(data);
  return (
    <>
      <div className="sucess-screen">
        <div className="detail">
          <h1 className="title">Your Reservation is successful!</h1>
          {data && (
            <>
              <p>
                Date: <strong>{data.date}</strong>
              </p>
              <p>
                Time: <strong>{data.time}</strong>{" "}
              </p>
              <p>
                Total Guests:<strong>{data.numOfGuests}</strong>
              </p>
              <p>
                Event:<strong>{data.Occasion}</strong>
              </p>
            </>
          )}
        </div>
      </div>
      <RestaurantArea />
      <TestmonialSection />
    </>
  );
};
export default ConfirmationPage;
