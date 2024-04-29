import React, { useState } from "react";
// Import component
import Checkbox from "../../components/common/Checkbox";

interface CheckboxProps {
  onSubmitForm: (event: React.FormEvent<HTMLFormElement>) => void;
}

const ProductFilter: React.FC<CheckboxProps> = ({ onSubmitForm }) => {
  const [formOpen, setformOpen] = useState<{
    '商品分類': boolean;
    '票券標籤': boolean;
    '車種設施': boolean;
    '價格範圍': boolean;
  }>({
    '商品分類': false,
    '票券標籤': false,
    '車種設施': false,
    '價格範圍': false,
  });

  // Filter categories
  const orderFilterList = [
    "商品分類",
    "票券標籤",
    "車種設施",
    "價格範圍 (TWD)",
  ];

  // Product categories
  const categories = [
    "超值套票",
    "交通票券",
    "景點門票",
    "商品兌換券",
    "現金抵用券",
  ];

  return (
    <div className={`fixed top-0 left-0 w-full h-full overflow-auto z-50 bg-[#fff] `}>
      {/* Mobile title */}
      <div className={`h-[50px] flex items-center shadow-md `}>
        <span className={`icon-[bitcoin-icons--arrow-left-filled] w-[24px] h-[24px] !ml-[12px]`}></span>
        <p className={`m-[0_auto]`}>篩選商品</p>
      </div>
      {/* Filter menu */}
      <form onSubmit={onSubmitForm} className={`p-[12px] `}>
        {/* Filter menu titles */}
        {orderFilterList.map((orderFilterItem) => (
          <div key={orderFilterItem} className={`border-[2px] border-solid border-[#E5E6EB] rounded-[8px] mb-[12px] h-[52px] overflow-hidden duration-300 ${formOpen[orderFilterItem as keyof typeof formOpen] && 'h-[auto] duration-300 '} `}>
            <div onClick={() => setformOpen(prevState => ({ ...prevState, [orderFilterItem as keyof typeof formOpen]: !prevState[orderFilterItem as keyof typeof formOpen] }))} className={` bg-[#fff] flex gap-[6px] items-center p-[12px] `}>
              <span className="icon-[emojione-monotone--red-triangle-pointed-down] w-[10px] h-[10px]"></span>
              <p>{orderFilterItem}</p>
            </div>
            {/* Filter menu content options */}
            <div className={`bg-[#F7F8FA] pl-[34px] pr-[12px] flex flex-col gap-[9px] `}>
              {categories.map(
                (categorieItem) =>
                  orderFilterItem === "商品分類" && (
                    <Checkbox key={categorieItem} content={categorieItem} />
                  )
              )}
            </div>
          </div>
        ))}
      </form>
    </div>
  );
};

export default ProductFilter;
