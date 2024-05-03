import { useState, useEffect } from "react";
import "../../assets/index.css"; // 這是可選的，用於定義按鈕的樣式

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 監聽滾動事件
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // 如果滾動位置大於100，顯示按鈕，否則隱藏
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 平滑滾動到頂部
    });
  };

  return (
    <div>
      {isVisible && (
        <button className="back-to-top-button" onClick={scrollToTop}>
          返回頂部
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
