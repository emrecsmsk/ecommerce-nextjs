"use client"

import { CartProductType } from "@/app/product/[productId]/ProductDetails"

interface SetQtyProps {
    cartCounter?: boolean,
    cartProduct: CartProductType,
    handleQtyIncrease: () => void,
    handleQtyDescrease: () => void,
}

const btnStyles = 'border-[1.2px] border-slate-300 px-2 rounded'

const SetQuantity: React.FC<SetQtyProps> = ({ cartCounter, cartProduct, handleQtyIncrease, handleQtyDescrease }) => {
    return (
        <div className="flex gap-8 items-center">
            {cartCounter ?
                null
                :
                <div className="font-semibold">QUANTİTY:</div>}
                <div className="flex gap-4 items-center text-base">
                    <button onClick={handleQtyDescrease} className={btnStyles}>-</button>
                    <div>{cartProduct.quantity}</div>
                    <button onClick={handleQtyIncrease} className={btnStyles}>+</button>
                </div>
        </div>
    )
}

export default SetQuantity