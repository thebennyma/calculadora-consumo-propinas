import type { Dispatch, SetStateAction } from "react"

const tipOptions = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    },
]

type TipPer = {
    setTip: Dispatch<SetStateAction<number>>,
    tip: number
}

export default function TipPer({ setTip, tip }: TipPer) {
    return (
        <div>
            <h3 className="font-black text-2x1">Propina:</h3>
            <form>
                {tipOptions.map(tipOption => (
                    <div className="flex gap-2" key={tipOption.id}>
                        <label htmlFor="">{tipOption.label}</label>
                        <input
                            id={tipOption.id}
                            type="radio"
                            name="tip"
                            value={tipOption.value}
                            onChange={e => setTip(+e.target.value)}
                            checked={tipOption.value === tip} />
                    </div>
                ))}
            </form>
        </div>
    )
}
