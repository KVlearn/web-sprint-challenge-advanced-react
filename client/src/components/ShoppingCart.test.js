import React from "react";
import { render,screen, fireEvent } from "@testing-library/react";
import ShoppingCart from './ShoppingCart';

const mock = [{
    "name": "New Plant",
    "id": 123445,
    "scientificName": "The New Plant",
    "difficulty": "easy",
    "light": "direct",
    "img":
      "https://cdn.shopify.com/s/files/1/2781/9558/products/PEPEROMIA_ROSSO-1_800x.png?v=1587156590",
    "sizes": ["small"],
    "watering": 2,
    "description":
      "Rosalia is a stunner with glossy green leaves accompanied by bright red undersides. Her oval shaped leaves are deeply grooved, adding depth to her figure. Flower spikes will appear with bright light, adding even more character to this absolute beaut.",
    "price": 100,
  },
  {"name": "Peperomia Rosso",
  "id": 143,
  "scientificName": "Peperomia caperata rosso",
  "difficulty": "easy",
  "light": "direct",
  "img":
    "https://cdn.shopify.com/s/files/1/2781/9558/products/PEPEROMIA_ROSSO-1_800x.png?v=1587156590",
  "sizes": ["small"],
  "watering": 2,
  "description":
    "Rosalia is a stunner with glossy green leaves accompanied by bright red undersides. Her oval shaped leaves are deeply grooved, adding depth to her figure. Flower spikes will appear with bright light, adding even more character to this absolute beaut.",
  "price": 21,
}] // with each object being a mock plant

test("test to check on displays plants & price in cart", () => {
    //query for form header element
    render(<ShoppingCart  cart={mock}/>)
    const plantname = screen.getAllByTestId("pname")
    console.log('plantname=',plantname[0]);
    const plantprice = screen.getAllByTestId("pprice")
    expect(plantname[0]).toBeInTheDocument();
    expect(plantprice[0]).toBeInTheDocument();
    expect(plantname[1]).toBeInTheDocument();
    expect(plantprice[1]).toBeInTheDocument();
});
