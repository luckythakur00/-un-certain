const ICONS = {
    success: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ),
    error: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    )
};

const TYPE_CLASSES = {
    success: {
        container: 'bg-green-100 border-green-400',
        icon: 'text-green-500',
        title: 'text-green-800',
        message: 'text-green-700',
        closeButton: 'text-green-500 hover:bg-green-200 focus:ring-green-600',
    },
    error: {
        container: 'bg-red-100 border-red-400',
        icon: 'text-red-500',
        title: 'text-red-800',
        message: 'text-red-700',
        closeButton: 'text-red-500 hover:bg-red-200 focus:ring-red-600',
    }
};

const Alert = ({ type = 'info', title, message, onClose }) => {
    const classes = TYPE_CLASSES[type] || TYPE_CLASSES.info;

    return (
        <div className={`rounded-md border p-4 shadow-sm ${classes.container}`} role="alert">
            <div className="flex">
                <div className={`flex-shrink-0 ${classes.icon}`}>{ICONS[type]}</div>
                <div className="ml-3 flex-1 md:flex md:justify-between">
                    <div>
                        <h3 className={`text-sm font-medium ${classes.title}`}>{title}</h3>
                        <div className={`mt-2 text-sm ${classes.message}`}><p>{message}</p></div>
                    </div>
                    {
                        onClose && (
                            <div className="pl-3">
                                <div className="-mx-1.5 -my-1.5">
                                    <button type="button" onClick={onClose} className={`inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2 ${classes.closeButton} ${classes.container}`}>
                                        <span className="sr-only">Dismiss</span>
                                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Alert;