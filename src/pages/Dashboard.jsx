
import Alert from "../components/Dashboard/Alert/Alert";
import DashboardCard from "../components/Dashboard/DashboardCard/DashboardCard";
import EventsNoticeBoard from "../components/Dashboard/EventsNoticeBoard/EventsNoticeBoard";
import FeesTodaySchedule from "../components/Dashboard/FeesAndTSchedule/FeesTodaySchedule";




const Dashboard = () => {
    return (
        <div>
            <h1>Admin Dashboard</h1>
            <Alert />
            <DashboardCard />
            <FeesTodaySchedule />
            <EventsNoticeBoard />




        </div>
    );
};

export default Dashboard;