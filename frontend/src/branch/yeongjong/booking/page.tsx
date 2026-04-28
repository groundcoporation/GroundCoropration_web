import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  User,
  X,
  MapPin,
  Car,
  Phone,
} from "lucide-react";

const YeongjongBooking = () => {
  const [selectedDay, setSelectedDay] = useState(14);

  const programs = [
    {
      title: "[영종] 토요 얼리버드반",
      time: "10:00 - 11:30",
      age: "5세~7세",
      type: "apply",
    },
    {
      title: "[영종] 유소년 스킬업",
      time: "14:00 - 15:30",
      age: "초등 저학년",
      type: "apply",
    },
    {
      title: "[영종] 1:1 개인 레슨",
      time: "시간 협의",
      age: "전 연령",
      type: "consult",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f0f7f4] font-sans text-[#1b4332]">
      {/* 헤더 */}
      <header className="h-[70px] flex justify-between items-center px-[5%] bg-white shadow-sm sticky top-0 z-50">
        <a href="/">
          <img
            src="/image_d819b3.jpg"
            alt="Logo"
            className="h-[35px] lg:h-[45px]"
          />
        </a>
        <a
          href="/"
          className="text-[#2d6a4f] font-bold text-sm flex items-center gap-1"
        >
          <X size={18} /> 예약 취소
        </a>
      </header>

      <section className="max-w-[1400px] mx-auto py-10 lg:py-20 px-[5%] lg:px-[10%]">
        <div className="mb-10">
          <span className="text-[#52b788] font-extrabold tracking-widest text-xs">
            RESERVATION
          </span>
          <h2 className="text-3xl lg:text-5xl font-black mt-2">
            영종 브랜치 수업 신청
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8">
          {/* 캘린더 카드 */}
          <div className="bg-white p-6 lg:p-10 rounded-[30px] shadow-xl shadow-[#2d6a4f]/5">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold">2026년 5월</h3>
              <div className="flex gap-4 text-[#2d6a4f] cursor-pointer">
                <ChevronLeft size={20} /> <ChevronRight size={20} />
              </div>
            </div>
            <table className="w-full text-center border-separate border-spacing-y-2">
              <thead>
                <tr className="text-gray-400 text-sm">
                  {["일", "월", "화", "수", "목", "금", "토"].map((d) => (
                    <th key={d} className="pb-4 font-medium">
                      {d}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {/* 14일 주간 샘플 */}
                  {[11, 12, 13, 14, 15, 16, 17].map((day) => (
                    <td
                      key={day}
                      onClick={() => setSelectedDay(day)}
                      className={`p-3 lg:p-4 rounded-xl cursor-pointer transition-all ${selectedDay === day ? "bg-[#2d6a4f] text-white font-bold shadow-md" : "hover:bg-[#f0f7f4]"}`}
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
                className="bg-white p-6 rounded-2xl border border-[#edf2f0] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-[#52b788] transition-all"
              >
                <div className="program-info">
                  <h4 className="text-lg font-bold text-[#2d6a4f] mb-2">
                    {p.title}
                  </h4>
                  <div className="flex gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Clock size={14} /> {p.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <User size={14} /> {p.age}
                    </span>
                  </div>
                </div>
                <button
                  className={`w-full sm:w-auto px-8 py-3 rounded-xl font-bold text-white transition-all active:scale-95 ${p.type === "consult" ? "bg-[#1b4332]" : "bg-[#2d6a4f] hover:bg-[#52b788]"}`}
                >
                  {p.type === "consult" ? "상담" : "신청"}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 오시는 길 (영종) */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6">
          <div className="h-[250px] lg:h-[400px] rounded-[25px] overflow-hidden bg-gray-200">
            <img
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1000"
              className="w-full h-full object-cover"
              alt="Map"
            />
          </div>
          <div className="bg-[#2d6a4f] text-white p-8 lg:p-10 rounded-[25px] flex flex-col justify-center gap-6">
            <div className="info-group">
              <h5 className="text-[#52b788] text-[10px] font-black tracking-widest mb-2 flex items-center gap-2">
                <MapPin size={14} /> ADDRESS
              </h5>
              <p className="text-sm lg:text-base">
                인천광역시 중구 영종대로 123
                <br />
                풋볼 그라운드 영종센터
              </p>
            </div>
            <div className="info-group">
              <h5 className="text-[#52b788] text-[10px] font-black tracking-widest mb-2 flex items-center gap-2">
                <Car size={14} /> PARKING
              </h5>
              <p className="text-sm lg:text-base">
                센터 앞 전용 주차장 무료 이용
              </p>
            </div>
            <div className="info-group">
              <h5 className="text-[#52b788] text-[10px] font-black tracking-widest mb-2 flex items-center gap-2">
                <Phone size={14} /> CONTACT
              </h5>
              <p className="text-sm lg:text-base">032-987-6543</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-gray-400 text-[10px] border-t border-gray-100 bg-white mt-10">
        <p>&copy; 2026 GROUND CORPORATION YEONGJONG. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
};

export default YeongjongBooking;
