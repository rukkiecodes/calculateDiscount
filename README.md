# **calculateDiscount Function Documentation**

## **Introduction**

The `calculateDiscount` function is a utility function that calculates the discounted amount for a given `baseAmount`. It allows you to apply discounts based on different discount rates and conditions. The function returns a promise that resolves to the discounted amount.

## **Function Signature**

```javascript
const calculateDiscount = (baseAmount, initialDiscount, mutatedDiscount, prop) => {
    // Function body
}
```

## **Parameters**

- `baseAmount`: The initial amount for which the discount is to be applied.
- `initialDiscount`: An object representing the initial discount rate.
- `mutatedDiscount`: An object representing a mutated discount rate.
- `prop`: A boolean value indicating whether the initial discount should be considered.

## **Function Logic**

1. The `discountRate` is determined based on different conditions:

   - If the `prop` parameter is `true`, the initial discount is considered. It checks if the `initialDiscount.discount` exists and is of length 2. If so, it sets the discount rate to '0'; otherwise, it uses the provided discount value (parsed as a float). If the `initialDiscount` does not exist, the discount rate is set to 0.

   - If the `prop` parameter is `false` or not provided, it uses the `mutatedDiscount.discount` value as the discount rate (parsed as a float). If `mutatedDiscount.discount` does not exist, the discount rate is set to 0.

2. The `discountedAmount` is calculated by subtracting the discount rate from the `baseAmount`.

3. The function returns a promise that resolves to the `discountedAmount`.

## **Usage Example**

```javascript
import calculateDiscount from './calculateDiscount';

// Sample usage with different discount scenarios
const baseAmount = 100; // Initial amount
const initialDiscount = { discount: '10' }; // Initial discount rate
const mutatedDiscount = { discount: '5' }; // Mutated discount rate
const prop = true; // Consider initial discount

// Calculate the discounted amount using the calculateDiscount function
calculateDiscount(baseAmount, initialDiscount, mutatedDiscount, prop)
    .then(discountedAmount => {
        console.log(`Discounted Amount: $${discountedAmount.toFixed(2)}`);
    });
```

## **GitHub Repository**

- The source code for this function is available in the [calculateDiscount GitHub repository](https://github.com/rukkiecodes/calculateDiscount).

## **Notes**

- This function provides flexibility in applying discounts based on different conditions and sources.

- It can be used to calculate discounted prices in various scenarios, making it a versatile utility for discount calculations.

---

This Markdown documentation provides a detailed explanation of the `calculateDiscount` function, its parameters, and how it performs the discount calculation. It also includes a usage example and a link to the GitHub repository for reference.