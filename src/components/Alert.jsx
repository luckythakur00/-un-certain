// import { FiCheckCircle, FiAlertTriangle, FiX } from 'react-icons/fi';

// const Alert = ({ type, title, message, onClose }) => {
//     const alertStyles = {
//         success: {
//             bgColor: 'bg-green-800/20',
//             borderColor: 'border-green-500',
//             textColor: 'text-green-200',
//             iconColor: 'text-green-400',
//             Icon: FiCheckCircle,
//         },
//         error: {
//             bgColor: 'bg-red-800/20',
//             borderColor: 'border-red-500',
//             textColor: 'text-red-200',
//             iconColor: 'text-red-400',
//             Icon: FiAlertTriangle,
//         },
//     };

//     const styles = alertStyles[type] || alertStyles.error;
//     const Icon = styles.Icon;

//     return (
//         <div className={`${styles.bgColor} border ${styles.borderColor} ${styles.textColor} p-4 rounded-lg flex`} role="alert">
//             <div className={`mr-3 ${styles.iconColor}`}>
//                 <Icon className="w-6 h-6" />
//             </div>
//             <div className="flex-grow">
//                 <p className="font-bold">{title}</p>
//                 <p className="text-sm">{message}</p>
//             </div>
//             <div className="ml-3">
//                 <button onClick={onClose} className={`p-1.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 ${styles.textColor} ${styles.bgColor} hover:bg-opacity-50`} aria-label="Dismiss">
//                     <FiX className="h-5 w-5" />
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Alert;










import { FiCheckCircle, FiAlertTriangle, FiX } from 'react-icons/fi';
import { IconBase } from 'react-icons/lib';

const Alert = ({ type, title, message, onClose }) => {
    // const alertStyles = {
    //     success: {
    //         bgColor: 'bg-green-800/20',
    //         borderColor: 'border-green-500',
    //         textColor: 'text-green-200',
    //         iconColor: 'text-green-400',
    //         Icon: FiCheckCircle,
    //     },
    //     error: {
    //         bgColor: 'bg-red-800/20',
    //         borderColor: 'border-red-500',
    //         textColor: 'text-red-200',
    //         iconColor: 'text-red-400',
    //         Icon: FiAlertTriangle,
    //     },
    // };

    // const styles = alertStyles[type] || alertStyles.error;
    // const Icon = styles.Icon;

    return (
        <div className={` border p-4 rounded-lg flex`} role="alert">
            <div className={`mr-3`}>
                {/* <Icon className="w-6 h-6" /> */}
                <IconBase className="w-6 h-6" />
            </div>
            <div className="flex-grow">
                <p className="font-bold">Error</p>
                <p className="text-sm">All Fields are required</p>
            </div>
            <div className="ml-3">
                <button className={`p-1.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-opacity-50`} aria-label="Dismiss">
                    <FiX className="h-5 w-5" />
                </button>
            </div>
        </div>
    );
};

export default Alert;