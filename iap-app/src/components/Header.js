import { useHistory } from "react-router-dom";
// import DP from 'images/dp.jpg';

function Header() {
    const history = useHistory();
    const redirectToHome = () => {
        history.push('/')
    }
    return (
        <div className='flex w-full border-b fixed z-10'>
            <div className="flex items-center justify-center flex-none border-b border-gray-600 py-4 w-64 bg-sidebarDark">
                <svg className="cursor-pointer" onClick={() => redirectToHome()} width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.9105 0.0775309C10.875 0.211663 10.156 0.377986 9.25465 0.694538C7.7631 1.21497 6.6203 1.83734 5.39701 2.787C4.02887 3.85469 2.72511 5.44281 1.90422 7.05239C1.59303 7.6694 1.53402 7.79816 1.29794 8.39371C0.756051 9.75649 0.487787 11.2749 0.482422 12.9542C0.482422 14.6174 0.772147 16.3021 1.27648 17.5415C1.30867 17.6166 1.38379 17.8098 1.44817 17.9707C1.60376 18.3731 2.05445 19.2799 2.10274 19.3013C2.12956 19.312 2.14566 19.3496 2.14566 19.3872C2.14566 19.4408 2.68755 20.31 2.85387 20.5192C2.87534 20.5461 2.98264 20.6909 3.08995 20.8412C3.41186 21.2757 4.16837 22.1288 4.49565 22.4239L4.80147 22.6975L4.81757 16.7153L4.8283 10.7276H5.57943H6.33057V11.3017V11.8704L6.56128 11.6343C7.67189 10.4647 9.66241 10.1857 11.3042 10.9744C13.1606 11.865 14.121 14.1292 13.5522 16.286C13.2303 17.5254 12.4631 18.5126 11.39 19.0599C10.5906 19.473 9.89848 19.6071 8.96492 19.5267C7.96162 19.4354 7.26413 19.1296 6.58811 18.4697L6.33057 18.2229V22.0001V25.7772L6.69541 25.9972C8.08502 26.8449 9.44243 27.3653 11.0306 27.6765C12.3075 27.9233 14.1317 27.9609 15.3979 27.7677C16.9753 27.5209 18.6653 26.9361 19.9315 26.1957C20.2857 25.9811 21.3104 25.3158 21.3533 25.2675C21.3694 25.2514 21.525 25.1173 21.7021 24.9778C22.5766 24.2749 23.6068 23.159 24.2238 22.2361C24.653 21.5977 25.2861 20.4495 25.4631 19.9827C25.4953 19.8915 25.608 19.591 25.7153 19.312C25.9568 18.6843 26.1928 17.7347 26.3484 16.8172C26.504 15.8729 26.5201 14.1131 26.3806 13.1688C26.1499 11.6343 25.7582 10.3681 25.1037 9.059C24.6584 8.16837 23.9233 7.04702 23.4136 6.48904C23.317 6.3871 23.1936 6.2476 23.14 6.18321C21.745 4.56827 19.5882 3.1733 17.4528 2.50264C16.9592 2.34168 16.3046 2.18608 16.2724 2.21291C16.2671 2.22364 16.251 4.9653 16.2402 8.3025L16.2295 14.376H16.8572C17.2006 14.376 17.4903 14.3545 17.5011 14.3277C17.5172 14.2741 18.1878 13.5229 18.5366 13.1688C18.6546 13.0454 18.8853 12.804 19.0409 12.6269C19.3628 12.2782 19.9852 11.6129 20.4037 11.1676L20.6666 10.8886H21.5733C22.0723 10.8886 22.4801 10.9047 22.4801 10.9261C22.4801 10.9476 22.4264 11.0173 22.362 11.0763C22.2923 11.1354 22.0723 11.3661 21.863 11.586C21.6592 11.8114 21.0851 12.4123 20.5968 12.9274C18.4883 15.154 18.66 14.9608 18.7405 15.0735C18.8102 15.1701 18.9497 15.3364 19.6418 16.1412C19.8296 16.3611 20.1623 16.7474 20.3769 16.9996C20.5968 17.2518 20.8275 17.52 20.8866 17.5952C20.951 17.6703 21.1387 17.8902 21.2997 18.078C21.4607 18.2712 21.6055 18.4375 21.6216 18.4536C21.6377 18.4697 21.7826 18.636 21.9435 18.8292C22.1045 19.0223 22.303 19.2477 22.3835 19.3335C22.464 19.4247 22.5176 19.5159 22.5015 19.5374C22.4693 19.591 20.7578 19.591 20.6773 19.5374C20.6505 19.5159 20.4305 19.2691 20.1998 18.9901C19.9637 18.7111 19.7599 18.4697 19.7438 18.4536C19.7277 18.4375 19.5935 18.2819 19.4487 18.1049C19.1697 17.7722 18.9497 17.5147 18.8585 17.4127C18.8263 17.3805 18.6975 17.2196 18.5634 17.0586C18.4293 16.8977 18.2576 16.6938 18.1825 16.6026C17.6567 16.0017 17.4903 15.8032 17.4903 15.7602C17.4903 15.7388 17.206 15.7173 16.8626 15.7173H16.2295L16.2456 17.4718C16.2563 18.4429 16.2456 19.312 16.2295 19.4086L16.1973 19.5857L15.4891 19.5696L14.7809 19.5535L14.7648 9.81014L14.7541 0.0614351L14.5877 0.0292434C14.2926 -0.0297746 12.4953 0.00778232 11.9105 0.0775309Z" fill="white" />
                    <path d="M8.5035 11.9935C7.43581 12.2671 6.64175 13.0665 6.34666 14.1718C6.22862 14.6171 6.22862 15.4702 6.35202 15.9316C6.70076 17.2676 7.81138 18.1475 9.14733 18.1475C10.2472 18.1475 11.0949 17.7129 11.6583 16.8544C11.9802 16.3662 12.1197 15.9155 12.1573 15.2609C12.2431 13.823 11.5671 12.6588 10.3545 12.1491C10.0433 12.015 9.9253 11.9989 9.30829 11.9828C8.92735 11.9774 8.56252 11.9828 8.5035 11.9935Z" fill="white" />
                </svg>
                <div className="flex items-center justify-center cursor-pointer" onClick={() => redirectToHome()}>
                    <div className="ml-3 bg-red-600 h-3 w-2"></div>
                    <div className="ml-0.5 bg-red-600 h-3 w-1"></div>
                    <div className="ml-0.5 bg-red-600 h-3 w-0.5"></div>
                    <div className="ml-0.5 bg-red-600 h-3 w-px"></div>
                    <h1 className="text-l font-semibold text-white ml-px">MLscape</h1>
                </div>
            </div>
            <span className="w-auto bg-gray-100 flex justify-end items-center text-gray-500 p-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
            </span>
            <input className="w-full bg-gray-100 px-4 outline-none" type="text" placeholder="Search for tags, name, libraries" />
            <button className="hover:bg-gray-200 bg-gray-100 text-white px-4 border-l border-r">
                <div className="bg-gray-400 w-6 h-6 text-sm rounded-full grid place-items-center">
                    ?
                </div>
            </button>
            <div className="flex bg-gray-100 items-center pl-4">
                <div className="h-8 w-8 rounded-full ">
                    <img className="w-8 h-8 rounded-full object-cover max-w-none " src={'images/dp.jpg'} alt="display" />
                </div>
                <div className="text-sm font-semibold text-black ml-4 mr-2 whitespace-nowrap">Sandeep Siddam</div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 9.5L12 14.5L17 9.5H7Z" fill="black" fillOpacity="0.54"/>
                </svg>
            </div>
        </div>
    );
}

export default Header;
