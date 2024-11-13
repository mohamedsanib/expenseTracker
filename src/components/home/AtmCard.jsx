const AtmCard = () => {
  return (
    <div
      className="bg-[url('../public/images/web/blackearth.png')] bg-cardbg bg-cover bg-center bg-no-repeat w-full rounded-3xl  h-56 px-4 py-3 flex flex-col justify-between  text-white"
      style={{
        "box-shadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
    >
      <div className="flex flex-col mt-2">
        <h1 className="text-2xl font-extrabold">₹ 5200.00</h1>
        <h3 className="">Balance</h3>
      </div>

      <div className="flex flex-row justify-between items-end mb-2">
        <p>
          <span className="pr-3 text-lg">XXXX</span>
          <span className="pr-3 text-lg">XXXX</span>
          <span className="pr-3 text-lg">XXXX</span>
          <span className="pr-3 text-lg">XXXX</span>
        </p>

        <img src="images/web/whiteExpense.png" alt="" className="size-10" />
      </div>
    </div>
  );
};

export default AtmCard;
