import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Dashboard from "./pages/Dashboard"
import Analytics from "./pages/Analytics";
import Authentication from "./pages/Authentication";
import Build from "./pages/Build";
import Settings from "./pages/Settings";
import Stroage from "./pages/Stroage";
import StudentSection from "./pages/StudentSection";
import AttendanceSection from "./pages/AttendanceSection";
import SettingSection from "./pages/SettingSection";
import TeacherSection from "./pages/TeacherSection";
import ScheduleSection from "./pages/ScheduleSection";
import StudentList from "./components/Student/StudentList";
import StudentUploadPhoto from "./components/Student/StudentUploadPhoto";
import StudentVisitingList from "./components/Student/StudentVisitingList";
import AttendanceList from "./components/Attendance/AttendanceList";
import IndividualAttendance from "./components/Attendance/IndividualAttendance";
import SettingBatch from "./components/Setting/SettingBatch";
import SettingGroup from "./components/Setting/SettingGroup";
import SettingInstitution from "./components/Setting/SettingInstitution";
import SettingSubject from "./components/Setting/SettingSubject";
import SettingCourse from "./components/Setting/SettingCourse";
import TeachersList from "./components/Teachers/TeachersList";
import TeachersSchedule from "./components/Teachers/TeachersSchedule";
import ScheduleManage from "./components/Schedule/ScheduleManage";
import WeeklySchedule from "./components/Schedule/WeeklySchedule";
import DailySchedule from "./components/Schedule/DailySchedule";
import ScheduleGenerator from "./components/Schedule/ScheduleGenerator";
import EditSchedule from "./components/Schedule/EditSchedule";
import ExamSection from "./pages/ExamSection";
import ExamList from "./components/Exam/ExamList";
import MeritList from "./components/Exam/MeritList";
import IndividualMark from "./components/Exam/IndividualMark";
import PaymentSection from "./pages/PaymentSection";
import MakePayment from "./components/Payment/MakePayment";
import StudentPayment from "./components/Payment/StudentPayment";
import TeacherPayment from "./components/Payment/TeacherPayment";
import AddTransaction from "./components/Transaction/AddTransaction";
import BillList from "./components/Transaction/BillList";
import Biller from "./components/Transaction/Biller";
import TransactionList from "./components/Transaction/TransactionList";
import Salary from "./components/Transaction/Salary";
import Balance from "./components/Transaction/Balance";
import BillingSection from "./pages/BillingSection";
import MyInVoice from "./components/Billing/MyInVoice";
import SmsSection from "./pages/SmsSection";
import SendSms from "./components/SMS/SendSms";
import SmsReport from "./components/SMS/SmsReport";
import Recharge from "./components/SMS/Recharge";

const App = () => {
  return (
    <>
      <RootLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/authentication" element={<Authentication />} />
          <Route path="/stroage" element={<Stroage />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/build/:bID" element={<Build />} />
          <Route path="/analytics/:aID" element={<Analytics />} />

          {/* Student Section Route*/}
          <Route path="/student/:aID" element={<StudentSection />} />
          <Route path="/student/list" element={<StudentList />} />
          <Route path="/student/Uploading Photo" element={<StudentUploadPhoto />} />
          <Route path="/student/Visiting List" element={<StudentVisitingList />} />


          {/* Attendance Section Route */}
          <Route path="/attendance/:aID" element={<AttendanceSection />} />
          <Route path="/attendance/List" element={<AttendanceList />} />
          <Route path="/attendance/Individual Attendance" element={<IndividualAttendance />} />

          {/* Settings Section Route */}
          <Route path="/setting/:aID" element={<SettingSection />} />
          <Route path="/setting/Batch" element={<SettingBatch />} />
          <Route path="/setting/Group" element={<SettingGroup />} />
          <Route path="/setting/Institution" element={<SettingInstitution />} />
          <Route path="/setting/Subject" element={<SettingSubject />} />
          <Route path="/setting/Course" element={<SettingCourse />} />

          {/* Teachers Section Route */}
          <Route path="/teachers/:aID" element={<TeacherSection />} />
          <Route path="/teachers/List" element={<TeachersList />} />
          <Route path="/teachers/Teacher Schedule" element={<TeachersSchedule />} />

          {/* Schedule Section Route */}
          <Route path="schedule/:aID" element={<ScheduleSection />} />
          <Route path="schedule/Manage" element={<ScheduleManage />} />
          <Route path="schedule/Weekly Schedule" element={<WeeklySchedule />} />
          <Route path="schedule/Daily Schedule" element={<DailySchedule />} />
          <Route path="schedule/Schedule Generator" element={<ScheduleGenerator />} />
          <Route path="schedule/Edit Schedule" element={<EditSchedule />} />

          {/* Exam Section Route */}
          <Route path="exam/:aID" element={<ExamSection />} />
          <Route path="exam/Exam List" element={<ExamList />} />
          <Route path="exam/Merit List" element={<MeritList />} />
          <Route path="exam/Individual Mark" element={<IndividualMark />} />

          {/* Payment Section Route */}
          <Route path="payment/:aID" element={<PaymentSection />} />
          <Route path="payment/Make Payment" element={<MakePayment />} />
          <Route path="payment/Student Payment" element={<StudentPayment />} />
          <Route path="payment/Teacher Payment" element={<TeacherPayment />} />

          {/* Transaction Section Route */}
          <Route path="transaction/:aID" element={<PaymentSection />} />
          <Route path="transaction/Add Transaction" element={<AddTransaction />} />
          <Route path="transaction/Bill List" element={<BillList />} />
          <Route path="transaction/Biller" element={<Biller />} />
          <Route path="transaction/Transaction List" element={<TransactionList />} />
          <Route path="transaction/Salary" element={<Salary />} />
          <Route path="transaction/Balance" element={<Balance />} />

          {/* Billing  Section Route */}
          <Route path="billing/:aID" element={<BillingSection />} />
          <Route path="billing/My InVoice" element={<MyInVoice />} />

          {/* SMS  Section Route */}
          <Route path="SMS/:aID" element={<SmsSection />} />
          <Route path="SMS/Send SMS" element={<SendSms />} />
          <Route path="SMS/SMS Report" element={<SmsReport />} />
          <Route path="SMS/Recharge" element={<Recharge />} />

        </Routes>
      </RootLayout>
    </>
  );
};

export default App;
