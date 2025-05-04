
import clsx from 'clsx';

const SizeButton = ({ title, isSelected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        ' w-24  px-4 py-2 rounded-lg border text-sm font-medium transition cursor-pointer ',
        isSelected
          ? 'bg-pink-600 text-white '
          : 'border-pink-600 text-pink-500 hover:bg-pink-400 duration-500'
      )}
    >
      {title}
    </button>
  );
};

export default SizeButton;
