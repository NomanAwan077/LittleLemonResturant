import { initializeTimes } from "../bookingPage";
import { render, fireEvent } from "@testing-library/react";
import BookingPage from "../bookingPage";
import React from "react";
import "@testing-library/jest-dom";
describe("initializeTimes", () => {
  it("should return the correct default available times", () => {
    const expectedTimes = [
      "9:00 AM",
      "10:00 AM",
      "11:00 AM",
      "1:00 PM",
      "2:00 PM",
    ];

    const result = initializeTimes();

    expect(result).toEqual(expectedTimes);
  });
});

describe("BookingPage Component", () => {
  it("should maintain the same available times initially when updateTimes is called", () => {
    const { getByLabelText, getAllByRole } = render(<BookingPage />);

    const dateInput = getByLabelText(/choose a date:/i);
    fireEvent.change(dateInput, { target: { value: "2" } });
    const expectedTimes = [
      "9:00 AM",
      "10:00 AM",
      "11:00 AM",
      "1:00 PM",
      "2:00 PM",
    ];
    const timeOptions = getAllByRole("option");
    const availableTimes = timeOptions.map((option) => option.textContent);
    expect(availableTimes).toEqual(expectedTimes);
  });
});
