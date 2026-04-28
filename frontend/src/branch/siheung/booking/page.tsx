import { useState } from "react";
import Layout from "../../../components/Layout";
import {
  Clock,
  User,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Car,
  Phone,
} from "lucide-react";

const SiheungBooking = () => {
  const [selectedDay, setSelectedDay] = useState(14);
  const brandGreen = "#1a3021";
  const brandOrange = "#d35400";

  const programs = [
    { title: "[시흥] 유소년 기초반", time: "15:00 - 16:30", age: "6세~8세" },
    {
      title: "[시흥] 엘리트 심화 기술반",
      time: "17:00 - 18:30",
      age: "초등 고학년",
    },
    {
      title: "[시흥] 주말 성인 취미 세션",
      time: "10:00 - 12:00",
      age: "전 연령 성인",
    },
  ];

  return (
    <Layout
      branchName="Siheung"
      brandColor={brandGreen}
      logoUrl="/logo-siheung.png"
      isBookingPage
    >
      <section className="max-w-[1400px] mx-auto py-10 lg:py-20 px-[5%] lg:px-[10%]">
        <div className="mb-10">
          <span
            className="font-extrabold text-xs tracking-widest"
            style={{ color: brandOrange }}
          >
            RESERVATION
          </span>
          <h2
            className="text-4xl lg:text-5xl font-black mt-2"
            style={{ color: brandGreen }}
          >
            시흥 본점 수업 신청
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10">
          {/* 캘린더 카드 */}
          <div className="bg-white p-8 lg:p-10 rounded-[30px] shadow-xl shadow-black/5">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold" style={{ color: brandGreen }}>
                2026년 5월
              </h3>
              <div className="flex gap-4" style={{ color: brandOrange }}>
                <ChevronLeft className="cursor-pointer" />{" "}
                <ChevronRight className="cursor-pointer" />
              </div>
            </div>
            <table className="w-full text-center border-separate border-spacing-y-2">
              <thead>
                <tr className="text-gray-400 text-sm">
                  {["일", "월", "화", "수", "목", "금", "토"].map((d) => (
                    <th key={d} className="pb-4">
                      {d}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* 14일 주간 렌더링 예시 */}
                <tr>
                  {[11, 12, 13, 14, 15, 16, 17].map((day) => (
                    <td
                      key={day}
                      onClick={() => setSelectedDay(day)}
                      className={`p-4 rounded-xl cursor-pointer transition-all ${selectedDay === day ? "text-white font-bold" : "hover:bg-orange-50"}`}
                      style={{
                        backgroundColor:
                          selectedDay === day ? brandGreen : "transparent",
                      }}
                    >
                      {day}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          {/* 프로그램 리스트 */}
          <div className="flex flex-col gap-4">
            {programs.map((p, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-3xl border border-gray-100 flex justify-between items-center group hover:border-orange-500 transition-all"
              >
                <div>
                  <h4
                    className="text-lg font-bold mb-2"
                    style={{ color: brandGreen }}
                  >
                    {p.title}
                  </h4>
                  <p className="flex gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Clock size={14} /> {p.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <User size={14} /> {p.age}
                    </span>
                  </p>
                </div>
                <button
                  className="px-6 py-3 rounded-xl text-white font-bold transition-transform active:scale-95"
                  style={{ backgroundColor: brandOrange }}
                >
                  신청하기
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 오시는 길 (시흥) */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8">
          <div className="h-[300px] lg:h-[450px] rounded-[30px] overflow-hidden bg-gray-200">
            <img
              src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=1200"
              alt="Map"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="p-10 rounded-[30px] text-white flex flex-col justify-center gap-8"
            style={{ backgroundColor: brandGreen }}
          >
            <InfoBox
              title="ADDRESS"
              icon={<MapPin size={16} />}
              brandColor={brandOrange}
            >
              경기도 시흥시 서울대학로278번길 61
              <br />
              풋볼 그라운드 빌딩 4층
            </InfoBox>
            <InfoBox
              title="PARKING"
              icon={<Car size={16} />}
              brandColor={brandOrange}
            >
              지하 1~2층 전용 주차장 무료 이용
            </InfoBox>
            <InfoBox
              title="CONTACT"
              icon={<Phone size={16} />}
              brandColor={brandOrange}
            >
              031-123-4567
            </InfoBox>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const InfoBox = ({ title, icon, children, brandColor }: any) => (
  <div>
    <h5
      className="flex items-center gap-2 text-[10px] font-black tracking-widest mb-2"
      style={{ color: brandColor }}
    >
      {icon} {title}
    </h5>
    <p className="text-sm font-medium leading-relaxed">{children}</p>
  </div>
);

export default SiheungBooking;
