import { useEffect, useReducer, useState } from "react";
import BookingForm from "../../components/BookingForm";
import { fetchAPI } from "../../api/api";
import "./style.css";
import TestmonialSection from "../../components/Testmonial";
import RestaurantArea from "../../components/ResturantArea";

const BookingPage = () => {
  async function fetchAvailableTimes(date) {
    try {
      const dateObject = new Date(date);
      const times = await fetchAPI(dateObject);
      return times;
    } catch (error) {
      console.error("Failed to fetch times:", error);
      return [];
    }
  }
  function timesReducer(state, action) {
    switch (action.type) {
      case "SET_TIMES":
        return action.times;
      default:
        return state;
    }
  }

  const [availableTimes, dispatch] = useReducer(timesReducer, []);

  function updateTimes(selectedDate) {
    fetchAvailableTimes(selectedDate).then((times) => {
      dispatch({ type: "SET_TIMES", times });
    });
  }
  useEffect(() => {
    async function initializeTimes() {
      const today = new Date().toISOString().split("T")[0];
      const initialTimes = await fetchAvailableTimes(today);
      dispatch({ type: "SET_TIMES", times: initialTimes });
    }
    initializeTimes();
  }, []);

  return (
    <div className="wrapper login-page">
      <h2 className="title">Find any table for reservation</h2>
      <BookingForm availableTimes={availableTimes} onDateChange={updateTimes} />
      <RestaurantArea />
      <TestmonialSection />
    </div>
  );
};
export default BookingPage;
