import React from "react";
import { render,screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render (<CheckoutForm/>)
    //query for form header element
    const header = screen.getByText(/Checkout Form/i);
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", async () => {
    render (<CheckoutForm/>)
    //query for form header element
    const firstname = await screen.getByLabelText(/first name/i);
    const lastname = await screen.getByLabelText(/last name/i);
    const address = await screen.getByLabelText(/address/i);
    const city = await screen.getByLabelText(/city/i);
    const state = await screen.getByLabelText(/state/i);
    const zipcode = await screen.getByLabelText(/zip/i);
    const checkoutButton= await screen.getByRole("button",{name:/checkout/i});
    //fill out the form
    fireEvent.change(firstname,{target:{value:"Moonman"}});
    fireEvent.change(lastname,{target:{value:"X"}});
    fireEvent.change(address,{target:{value:"1234,Spaceway Lane"}});
    fireEvent.change(city,{target:{value:"Big Crater"}});
    fireEvent.change(state,{target:{value:"Starry"}});
    fireEvent.change(zipcode,{target:{value:"00001"}});
    fireEvent.click(checkoutButton);
    //expected result
    const success = screen.getByTestId('successMessage')
    expect(success).toBeInTheDocument();
    await screen.findByText(/shipped/i);
    await screen.findByText(/Moonman/i);
    await screen.findByText(/x/i);
    await screen.findByText(/1234,Spaceway Lane/i);
    await screen.findByText(/Big Crater/i);
    await screen.findByText(/Starry/i);
    await screen.findByText(/00001/i);
});
