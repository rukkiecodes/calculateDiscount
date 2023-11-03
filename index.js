export default (baseAmount, initialDiscount, mutatedDiscount, prop) => {
    return new Promise((resolve, reject) => {
        const discountRate = prop ? parseFloat(initialDiscount?.discount ? (initialDiscount?.discount.length == 2 ? '0' : initialDiscount?.discount) : 0) : parseFloat(mutatedDiscount.discount ? mutatedDiscount.discount : 0);

        const discountedAmount = baseAmount - parseFloat(discountRate);

        resolve(discountedAmount);
    });
};