export default function Button({ children, ...props }) {
    return (
        <button
            className="bg-stone-700 rounded-md px-4 py-2 hover:bg-stone-600 hover:text-stone-100 text-xs md:text-base text-stone-400 "
            {...props}
        >
            {children}
        </button>
    )
}