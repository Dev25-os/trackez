import Header from "@/components/Tickets/Header";
import TicketsDataTable from "@/components/Tickets/TicketsDataTable";

const Home = () => {
  return (
    <div className="p-4 ">
      <Header />
      <div className="table py-4 w-full">
        <TicketsDataTable />
      </div>
    </div>
  );
};

export default Home;
