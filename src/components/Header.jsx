import { useSelector } from "react-redux";
const Header = () => {
  const state = useSelector((store) => store);
  console.log(state);

  return (
    <header>
      <div>
        <img src="/logo.png" alt="logo" />
        <h3>Flight Radar</h3>
      </div>
      <p>
      {state.isLoading ? "Searching Flights..."
      : !state.isError
      ? `${state.flights.length} Flights founded ✅`
      : "Problem occurred ❌"
      }
      </p>
    </header>
  );
};

export default Header;
