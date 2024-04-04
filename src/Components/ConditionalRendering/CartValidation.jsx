// ------------------  Example 2 (&&) ------------------

function Cart() {
  const items = ["Wireless Earbuds", "Power Bank", "New SSD", "Hoddie"];

  return (
    <>
      <h1>Cart 🛒</h1>
      {items.length > 0 && <h2>You have {items.length} items in your Cart.</h2>}

      <ul>
        <h4> 👇Products </h4>
        {items.map((item) => (
          <li key={Math.random()}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export const CartValidation = () => <Cart />;
