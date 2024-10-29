import ButtonComponent from "../common/ButtonComponent";
import "./style.css";
import { submitAPI } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { useFormData } from "../MainSection";
import OrderSuccess from "../OrderSuccess";
import { useState } from "react";

const BookingForm = ({ availableTimes, onDateChange }) => {
  const { data, setData } = useFormData();
  const [Error, setErrors] = useState(null);

  const navigate = useNavigate("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log();
      const submission = submitAPI(data);
      submission && navigate("/orderConfirm");
    }
  };
  const validate = () => {
    const newErrors = {};

    if (data.date == "") newErrors.date = "Please choose a date.";
    if (data.time == "") newErrors.time = "Please select a time.";
    if (!data.numOfGuests || data.numOfGuests < 1 || data.numOfGuests > 10) {
      newErrors.numOfGuests = "Please enter a number between 1 and 10.";
    }
    if (!data.Occasion) newErrors.Occasion = "Please select an occasion.";

    setErrors(newErrors);
    console.log(Error);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    validate();
  };
  function handleDateChange(event) {
    const selectedDate = event.target.value;
    onDateChange(selectedDate);
    setData((prevData) => ({
      ...prevData,
      date: selectedDate,
    }));
    validate();
  }
  // console.log(availableTimes);
  return (
    <>
      <form>
        <div className="form-group">
          <label for="res-date">Choose date</label>
          <input
            type="date"
            id="res-date"
            name="date"
            onChange={handleDateChange}
            value={data.date}
          />
          {Error && <span className="error">{Error.date}</span>}
        </div>
        <div className="form-group">
          <label for="res-time">Choose time</label>
          <select
            id="res-time "
            name="time"
            onChange={handleChange}
            value={data.time}
          >
            {availableTimes?.map((option) => (
              <option>{option}</option>
            ))}
          </select>
          {Error && <span className="error">{Error.time}</span>}
        </div>
        <div className="form-group">
          <label for="guests">Number of guests</label>
          <input
            type="number"
            placeholder="1"
            name="numOfGuests"
            min="1"
            max="10"
            id="guests"
            onChange={handleChange}
            value={data.numOfGuests}
          />
          {Error && <span className="error">{Error.numOfGuests}</span>}
        </div>

        <div className="form-group">
          <label for="occasion">Occasion</label>
          <select
            id="occasion"
            name="Occasion"
            onChange={handleChange}
            value={data.Occasion}
          >
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
          {Error && <span className="error">{Error.Occasion}</span>}
        </div>
        <ButtonComponent
          type="submit"
          text="Make Your reservation"
          contained
          onClick={handleSubmit}
        />
      </form>
    </>
  );
};
export default BookingForm;
