export default function DarkButtons({href, des}) {
    return (
        <a href={href} className="cursor-pointer text-wrap bg-[#00324D] text-white py-2 px-3 rounded-xl text-base font-semibold mx-3 hover:scale-110 hover:bg-black transition-all duration-200 hover:shadow-lg">
            {des}
        </a>
    )
}