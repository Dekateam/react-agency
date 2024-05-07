import { List, ListItem } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import img1 from "../../../public/images/images.png"

const ListNav =()=>{
    return(
        
        <>

        <Grid xs={12} sx={{backgroundColor:"#C7C7C7" , paddingX:"20px"}}>
            <List sx={{display:"flex",overflowX:"auto" , direction:"row", justifyContent:"center"}}>
                <ListItem>
                <svg width="146" height="54" viewBox="0 0 146 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M71.9901 22.0701C73.3368 22.0701 74.4035 22.4634 75.1901 23.2501C75.9768 24.0235 76.3701 25.1901 76.3701 26.7501V32.8701H73.8701V27.0701C73.8701 26.1368 73.6635 25.4368 73.2501 24.9701C72.8368 24.4901 72.2435 24.2501 71.4701 24.2501C70.6301 24.2501 69.9568 24.5301 69.4501 25.0901C68.9435 25.6368 68.6901 26.4235 68.6901 27.4501V32.8701H66.1901V27.0701C66.1901 26.1368 65.9835 25.4368 65.5701 24.9701C65.1568 24.4901 64.5635 24.2501 63.7901 24.2501C62.9368 24.2501 62.2568 24.5235 61.7501 25.0701C61.2568 25.6168 61.0101 26.4101 61.0101 27.4501V32.8701H58.5101V22.1901H60.8901V23.5501C61.2901 23.0701 61.7901 22.7034 62.3901 22.4501C62.9901 22.1968 63.6568 22.0701 64.3901 22.0701C65.1901 22.0701 65.8968 22.2235 66.5101 22.5301C67.1368 22.8234 67.6301 23.2634 67.9901 23.8501C68.4301 23.2901 68.9968 22.8568 69.6901 22.5501C70.3835 22.2301 71.1501 22.0701 71.9901 22.0701ZM83.6448 22.0701C85.2181 22.0701 86.4181 22.4501 87.2448 23.2101C88.0848 23.9568 88.5048 25.0901 88.5048 26.6101V32.8701H86.1448V31.5701C85.8381 32.0368 85.3981 32.3968 84.8248 32.6501C84.2648 32.8901 83.5848 33.0101 82.7848 33.0101C81.9848 33.0101 81.2848 32.8768 80.6848 32.6101C80.0848 32.3301 79.6181 31.9501 79.2848 31.4701C78.9648 30.9768 78.8048 30.4235 78.8048 29.8101C78.8048 28.8501 79.1581 28.0835 79.8648 27.5101C80.5848 26.9235 81.7115 26.6301 83.2448 26.6301H86.0048V26.4701C86.0048 25.7235 85.7781 25.1501 85.3248 24.7501C84.8848 24.3501 84.2248 24.1501 83.3448 24.1501C82.7448 24.1501 82.1515 24.2435 81.5648 24.4301C80.9915 24.6168 80.5048 24.8768 80.1048 25.2101L79.1248 23.3901C79.6848 22.9634 80.3581 22.6368 81.1448 22.4101C81.9315 22.1835 82.7648 22.0701 83.6448 22.0701ZM83.3048 31.1901C83.9315 31.1901 84.4848 31.0501 84.9648 30.7701C85.4581 30.4768 85.8048 30.0635 86.0048 29.5301V28.2901H83.4248C81.9848 28.2901 81.2648 28.7635 81.2648 29.7101C81.2648 30.1635 81.4448 30.5235 81.8048 30.7901C82.1648 31.0568 82.6648 31.1901 83.3048 31.1901ZM97.7732 22.0701C99.1199 22.0701 100.2 22.4634 101.013 23.2501C101.827 24.0368 102.233 25.2035 102.233 26.7501V32.8701H99.7332V27.0701C99.7332 26.1368 99.5132 25.4368 99.0732 24.9701C98.6332 24.4901 98.0066 24.2501 97.1932 24.2501C96.2732 24.2501 95.5466 24.5301 95.0132 25.0901C94.4799 25.6368 94.2132 26.4301 94.2132 27.4701V32.8701H91.7132V22.1901H94.0932V23.5701C94.5066 23.0768 95.0266 22.7034 95.6532 22.4501C96.2799 22.1968 96.9866 22.0701 97.7732 22.0701ZM111.825 32.2901C111.531 32.5301 111.171 32.7101 110.745 32.8301C110.331 32.9501 109.891 33.0101 109.425 33.0101C108.251 33.0101 107.345 32.7035 106.705 32.0901C106.065 31.4768 105.745 30.5835 105.745 29.4101V24.2701H103.985V22.2701H105.745V19.8301H108.245V22.2701H111.105V24.2701H108.245V29.3501C108.245 29.8701 108.371 30.2701 108.625 30.5501C108.878 30.8168 109.245 30.9501 109.725 30.9501C110.285 30.9501 110.751 30.8035 111.125 30.5101L111.825 32.2901ZM119.941 22.0701C121.288 22.0701 122.368 22.4634 123.181 23.2501C123.995 24.0368 124.401 25.2035 124.401 26.7501V32.8701H121.901V27.0701C121.901 26.1368 121.681 25.4368 121.241 24.9701C120.801 24.4901 120.175 24.2501 119.361 24.2501C118.441 24.2501 117.715 24.5301 117.181 25.0901C116.648 25.6368 116.381 26.4301 116.381 27.4701V32.8701H113.881V18.0301H116.381V23.4301C116.795 22.9901 117.301 22.6568 117.901 22.4301C118.515 22.1901 119.195 22.0701 119.941 22.0701ZM137.913 22.1901V32.8701H135.533V31.5101C135.133 31.9901 134.633 32.3635 134.033 32.6301C133.433 32.8835 132.786 33.0101 132.093 33.0101C130.666 33.0101 129.539 32.6168 128.713 31.8301C127.899 31.0301 127.493 29.8501 127.493 28.2901V22.1901H129.993V27.9501C129.993 28.9101 130.206 29.6301 130.633 30.1101C131.073 30.5768 131.693 30.8101 132.493 30.8101C133.386 30.8101 134.093 30.5368 134.613 29.9901C135.146 29.4301 135.413 28.6301 135.413 27.5901V22.1901H137.913ZM141.186 18.0301H143.686V32.8701H141.186V18.0301Z" fill="black" fill-opacity="0.36"/>
<path d="M7.87006 26.8701C7.87006 24.375 8.36151 21.9043 9.31635 19.5991C10.2712 17.2939 11.6707 15.1994 13.435 13.4351C15.1993 11.6708 17.2939 10.2712 19.5991 9.3164C21.9043 8.36156 24.3749 7.87012 26.8701 7.87012C29.3652 7.87012 31.8359 8.36157 34.141 9.31641C36.4462 10.2712 38.5408 11.6708 40.3051 13.4351C42.0694 15.1994 43.4689 17.2939 44.4238 19.5991C45.3786 21.9043 45.8701 24.375 45.8701 26.8701L36.3701 26.8701C36.3701 25.6226 36.1243 24.3872 35.6469 23.2346C35.1695 22.082 34.4697 21.0348 33.5876 20.1526C32.7054 19.2704 31.6581 18.5707 30.5056 18.0933C29.353 17.6158 28.1176 17.3701 26.8701 17.3701C25.6225 17.3701 24.3872 17.6158 23.2346 18.0933C22.082 18.5707 21.0347 19.2704 20.1525 20.1526C19.2704 21.0348 18.5706 22.082 18.0932 23.2346C17.6158 24.3872 17.3701 25.6226 17.3701 26.8701L7.87006 26.8701Z" fill="black" fill-opacity="0.36"/>
<mask id="path-3-inside-1_45_440" fill="white">
<path d="M13.435 40.3051C15.1993 42.0694 17.2939 43.4689 19.5991 44.4238C21.9043 45.3786 24.3749 45.8701 26.8701 45.8701C29.3652 45.8701 31.8359 45.3786 34.141 44.4238C36.4462 43.4689 38.5408 42.0694 40.3051 40.3051L33.5876 33.5876C32.7054 34.4697 31.6581 35.1695 30.5055 35.6469C29.353 36.1243 28.1176 36.3701 26.8701 36.3701C25.6225 36.3701 24.3872 36.1243 23.2346 35.6469C22.082 35.1695 21.0347 34.4697 20.1525 33.5876L13.435 40.3051Z"/>
</mask>
<path d="M13.435 40.3051C15.1993 42.0694 17.2939 43.4689 19.5991 44.4238C21.9043 45.3786 24.3749 45.8701 26.8701 45.8701C29.3652 45.8701 31.8359 45.3786 34.141 44.4238C36.4462 43.4689 38.5408 42.0694 40.3051 40.3051L33.5876 33.5876C32.7054 34.4697 31.6581 35.1695 30.5055 35.6469C29.353 36.1243 28.1176 36.3701 26.8701 36.3701C25.6225 36.3701 24.3872 36.1243 23.2346 35.6469C22.082 35.1695 21.0347 34.4697 20.1525 33.5876L13.435 40.3051Z" fill="black" fill-opacity="0.36" stroke="#C7C7C7" stroke-width="4" mask="url(#path-3-inside-1_45_440)"/>
</svg>
                </ListItem>
                <ListItem>
                <svg width="141" height="32" viewBox="0 0 141 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M47.872 15.692H51.07V22.946C50.134 23.6913 49.042 24.2633 47.794 24.662C46.546 25.0607 45.2633 25.26 43.946 25.26C42.0913 25.26 40.4187 24.8613 38.928 24.064C37.4373 23.2493 36.2673 22.1313 35.418 20.71C34.5687 19.2887 34.144 17.6853 34.144 15.9C34.144 14.1147 34.5687 12.5113 35.418 11.09C36.2673 9.66867 37.4373 8.55933 38.928 7.762C40.436 6.94733 42.126 6.54 43.998 6.54C45.5233 6.54 46.91 6.79133 48.158 7.294C49.406 7.79667 50.4547 8.53333 51.304 9.504L49.172 11.584C47.7853 10.1973 46.1127 9.504 44.154 9.504C42.8713 9.504 41.7273 9.77267 40.722 10.31C39.734 10.8473 38.954 11.6013 38.382 12.572C37.8273 13.5427 37.55 14.652 37.55 15.9C37.55 17.1133 37.8273 18.2053 38.382 19.176C38.954 20.1467 39.734 20.9093 40.722 21.464C41.7273 22.0187 42.8627 22.296 44.128 22.296C45.5493 22.296 46.7973 21.984 47.872 21.36V15.692ZM55.216 5.708H58.466V25H55.216V5.708ZM68.9716 25.182C67.5676 25.182 66.3023 24.8787 65.1756 24.272C64.0489 23.6653 63.1649 22.8247 62.5236 21.75C61.8996 20.658 61.5876 19.4273 61.5876 18.058C61.5876 16.6887 61.8996 15.4667 62.5236 14.392C63.1649 13.3173 64.0489 12.4767 65.1756 11.87C66.3023 11.2633 67.5676 10.96 68.9716 10.96C70.3929 10.96 71.6669 11.2633 72.7936 11.87C73.9203 12.4767 74.7956 13.3173 75.4196 14.392C76.0609 15.4667 76.3816 16.6887 76.3816 18.058C76.3816 19.4273 76.0609 20.658 75.4196 21.75C74.7956 22.8247 73.9203 23.6653 72.7936 24.272C71.6669 24.8787 70.3929 25.182 68.9716 25.182ZM68.9716 22.4C70.1676 22.4 71.1556 22.0013 71.9356 21.204C72.7156 20.4067 73.1056 19.358 73.1056 18.058C73.1056 16.758 72.7156 15.7093 71.9356 14.912C71.1556 14.1147 70.1676 13.716 68.9716 13.716C67.7756 13.716 66.7876 14.1147 66.0076 14.912C65.2449 15.7093 64.8636 16.758 64.8636 18.058C64.8636 19.358 65.2449 20.4067 66.0076 21.204C66.7876 22.0013 67.7756 22.4 68.9716 22.4ZM100.767 11.116L95.6446 25H92.5246L88.9366 15.432L85.2966 25H82.1766L77.0806 11.116H80.1486L83.8146 21.36L87.6366 11.116H90.3666L94.1106 21.412L97.8806 11.116H100.767ZM111.139 25.26C108.626 25.26 106.667 24.558 105.263 23.154C103.859 21.7327 103.157 19.7047 103.157 17.07V6.8H106.537V16.94C106.537 20.5107 108.08 22.296 111.165 22.296C114.233 22.296 115.767 20.5107 115.767 16.94V6.8H119.095V17.07C119.095 19.7047 118.393 21.7327 116.989 23.154C115.602 24.558 113.652 25.26 111.139 25.26ZM131.317 6.8C132.894 6.8 134.263 7.06 135.425 7.58C136.603 8.1 137.505 8.84533 138.129 9.816C138.753 10.7867 139.065 11.9393 139.065 13.274C139.065 14.5913 138.753 15.744 138.129 16.732C137.505 17.7027 136.603 18.448 135.425 18.968C134.263 19.488 132.894 19.748 131.317 19.748H127.209V25H123.829V6.8H131.317ZM131.161 16.888C132.634 16.888 133.752 16.576 134.515 15.952C135.277 15.328 135.659 14.4353 135.659 13.274C135.659 12.1127 135.277 11.22 134.515 10.596C133.752 9.972 132.634 9.66 131.161 9.66H127.209V16.888H131.161Z" fill="black" fill-opacity="0.36"/>
<path d="M20.3507 12.9316H12.417L15.3457 6.84727C15.6207 6.13477 14.8301 5.43164 13.7507 5.43164H3.85072C3.02573 5.43164 2.32448 5.84883 2.21448 6.40664L0.0144772 17.6566C-0.116148 18.3316 0.653852 18.9316 1.65073 18.9316H9.81134L6.64197 28.0488C6.39447 28.7613 7.19197 29.4316 8.24385 29.4316C8.82135 29.4316 9.37134 29.2254 9.67384 28.8691L21.7738 14.6191C22.4132 13.8738 21.6226 12.9316 20.3507 12.9316Z" fill="black" fill-opacity="0.36"/>
</svg>
                </ListItem>
                <ListItem>
                <svg width="142" height="38" viewBox="0 0 142 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M65.66 26.4C65.1933 26.9467 64.6467 27.36 64.02 27.64C63.4067 27.92 62.7333 28.06 62 28.06C61.04 28.06 60.16 27.84 59.36 27.4C58.56 26.9733 57.6467 26.2267 56.62 25.16C55.3267 25.0533 54.1667 24.68 53.14 24.04C52.1133 23.3867 51.3133 22.54 50.74 21.5C50.1667 20.4467 49.88 19.28 49.88 18C49.88 16.64 50.2067 15.4133 50.86 14.32C51.5133 13.2133 52.4133 12.3533 53.56 11.74C54.7067 11.1133 55.9933 10.8 57.42 10.8C58.8467 10.8 60.1333 11.1133 61.28 11.74C62.4267 12.3533 63.3267 13.2067 63.98 14.3C64.6333 15.3933 64.96 16.6267 64.96 18C64.96 19.1067 64.74 20.1333 64.3 21.08C63.86 22.0133 63.2467 22.8133 62.46 23.48C61.6733 24.1333 60.76 24.6067 59.72 24.9C60.1067 25.3133 60.4867 25.6133 60.86 25.8C61.2333 25.9867 61.6333 26.08 62.06 26.08C62.98 26.08 63.78 25.7067 64.46 24.96L65.66 26.4ZM52.5 18C52.5 18.9333 52.7133 19.78 53.14 20.54C53.5667 21.2867 54.1533 21.8733 54.9 22.3C55.6467 22.7133 56.4867 22.92 57.42 22.92C58.3533 22.92 59.1933 22.7133 59.94 22.3C60.6867 21.8733 61.2733 21.2867 61.7 20.54C62.1267 19.78 62.34 18.9333 62.34 18C62.34 17.0667 62.1267 16.2267 61.7 15.48C61.2733 14.72 60.6867 14.1333 59.94 13.72C59.1933 13.2933 58.3533 13.08 57.42 13.08C56.4867 13.08 55.6467 13.2933 54.9 13.72C54.1533 14.1333 53.5667 14.72 53.14 15.48C52.7133 16.2267 52.5 17.0667 52.5 18ZM77.8159 14.32V25H75.4359V23.64C75.0359 24.12 74.5359 24.4933 73.9359 24.76C73.3359 25.0133 72.6893 25.14 71.9959 25.14C70.5693 25.14 69.4426 24.7467 68.6159 23.96C67.8026 23.16 67.3959 21.98 67.3959 20.42V14.32H69.8959V20.08C69.8959 21.04 70.1093 21.76 70.5359 22.24C70.9759 22.7067 71.5959 22.94 72.3959 22.94C73.2893 22.94 73.9959 22.6667 74.5159 22.12C75.0493 21.56 75.3159 20.76 75.3159 19.72V14.32H77.8159ZM91.1292 19.72C91.1292 19.8933 91.1159 20.14 91.0892 20.46H82.7092C82.8559 21.2467 83.2359 21.8733 83.8492 22.34C84.4759 22.7933 85.2492 23.02 86.1692 23.02C87.3426 23.02 88.3092 22.6333 89.0692 21.86L90.4092 23.4C89.9292 23.9733 89.3226 24.4067 88.5892 24.7C87.8559 24.9933 87.0292 25.14 86.1092 25.14C84.9359 25.14 83.9026 24.9067 83.0092 24.44C82.1159 23.9733 81.4226 23.3267 80.9292 22.5C80.4492 21.66 80.2092 20.7133 80.2092 19.66C80.2092 18.62 80.4426 17.6867 80.9092 16.86C81.3892 16.02 82.0492 15.3667 82.8892 14.9C83.7292 14.4333 84.6759 14.2 85.7292 14.2C86.7692 14.2 87.6959 14.4333 88.5092 14.9C89.3359 15.3533 89.9759 16 90.4292 16.84C90.8959 17.6667 91.1292 18.6267 91.1292 19.72ZM85.7292 16.2C84.9292 16.2 84.2492 16.44 83.6892 16.92C83.1426 17.3867 82.8092 18.0133 82.6892 18.8H88.7492C88.6426 18.0267 88.3159 17.4 87.7692 16.92C87.2226 16.44 86.5426 16.2 85.7292 16.2ZM99.5906 14.2C100.937 14.2 102.017 14.5933 102.831 15.38C103.644 16.1667 104.051 17.3333 104.051 18.88V25H101.551V19.2C101.551 18.2667 101.331 17.5667 100.891 17.1C100.451 16.62 99.824 16.38 99.0106 16.38C98.0906 16.38 97.364 16.66 96.8306 17.22C96.2973 17.7667 96.0306 18.56 96.0306 19.6V25H93.5306V14.32H95.9106V15.7C96.324 15.2067 96.844 14.8333 97.4706 14.58C98.0973 14.3267 98.804 14.2 99.5906 14.2ZM111.302 14.2C112.875 14.2 114.075 14.58 114.902 15.34C115.742 16.0867 116.162 17.22 116.162 18.74V25H113.802V23.7C113.495 24.1667 113.055 24.5267 112.482 24.78C111.922 25.02 111.242 25.14 110.442 25.14C109.642 25.14 108.942 25.0067 108.342 24.74C107.742 24.46 107.275 24.08 106.942 23.6C106.622 23.1067 106.462 22.5533 106.462 21.94C106.462 20.98 106.815 20.2133 107.522 19.64C108.242 19.0533 109.369 18.76 110.902 18.76H113.662V18.6C113.662 17.8533 113.435 17.28 112.982 16.88C112.542 16.48 111.882 16.28 111.002 16.28C110.402 16.28 109.809 16.3733 109.222 16.56C108.649 16.7467 108.162 17.0067 107.762 17.34L106.782 15.52C107.342 15.0933 108.015 14.7667 108.802 14.54C109.589 14.3133 110.422 14.2 111.302 14.2ZM110.962 23.32C111.589 23.32 112.142 23.18 112.622 22.9C113.115 22.6067 113.462 22.1933 113.662 21.66V20.42H111.082C109.642 20.42 108.922 20.8933 108.922 21.84C108.922 22.2933 109.102 22.6533 109.462 22.92C109.822 23.1867 110.322 23.32 110.962 23.32ZM120.17 25.14C119.717 25.14 119.33 24.9867 119.01 24.68C118.69 24.36 118.53 23.96 118.53 23.48C118.53 22.9867 118.684 22.5867 118.99 22.28C119.31 21.9733 119.704 21.82 120.17 21.82C120.637 21.82 121.024 21.9733 121.33 22.28C121.65 22.5867 121.81 22.9867 121.81 23.48C121.81 23.96 121.65 24.36 121.33 24.68C121.01 24.9867 120.624 25.14 120.17 25.14ZM124.253 14.32H126.753V25H124.253V14.32ZM125.513 12.56C125.06 12.56 124.68 12.42 124.373 12.14C124.067 11.8467 123.913 11.4867 123.913 11.06C123.913 10.6333 124.067 10.28 124.373 10C124.68 9.70667 125.06 9.56 125.513 9.56C125.967 9.56 126.347 9.7 126.653 9.98C126.96 10.2467 127.113 10.5867 127.113 11C127.113 11.44 126.96 11.8133 126.653 12.12C126.36 12.4133 125.98 12.56 125.513 12.56ZM134.835 25.14C133.755 25.14 132.781 24.9067 131.915 24.44C131.048 23.9733 130.368 23.3267 129.875 22.5C129.395 21.66 129.155 20.7133 129.155 19.66C129.155 18.6067 129.395 17.6667 129.875 16.84C130.368 16.0133 131.048 15.3667 131.915 14.9C132.781 14.4333 133.755 14.2 134.835 14.2C135.928 14.2 136.908 14.4333 137.775 14.9C138.641 15.3667 139.315 16.0133 139.795 16.84C140.288 17.6667 140.535 18.6067 140.535 19.66C140.535 20.7133 140.288 21.66 139.795 22.5C139.315 23.3267 138.641 23.9733 137.775 24.44C136.908 24.9067 135.928 25.14 134.835 25.14ZM134.835 23C135.755 23 136.515 22.6933 137.115 22.08C137.715 21.4667 138.015 20.66 138.015 19.66C138.015 18.66 137.715 17.8533 137.115 17.24C136.515 16.6267 135.755 16.32 134.835 16.32C133.915 16.32 133.155 16.6267 132.555 17.24C131.968 17.8533 131.675 18.66 131.675 19.66C131.675 20.66 131.968 21.4667 132.555 22.08C133.155 22.6933 133.915 23 134.835 23Z" fill="black" fill-opacity="0.36"/>
<circle cx="19" cy="19" r="19" fill="black" fill-opacity="0.12"/>
<path d="M28 24C26.8742 24 26.744 22.75 25.0067 22.75C23.2617 22.75 23.1253 24 22.0033 24C20.8906 24 20.7396 22.75 19 22.75C17.2787 22.75 17.1028 24 16.0067 24C14.8758 24 14.753 22.75 13.0033 22.75C11.2537 22.75 11.1289 24 10 24V20.875C10 19.8398 10.8638 19 11.9286 19H12.5714V13.375H15.1429V19H17.7143V13.375H20.2857V19H22.8571V13.375H25.4286V19H26.0714C27.1362 19 28 19.8398 28 20.875V24ZM28 29H10V25.25C11.742 25.25 11.879 24 13.0033 24C14.1264 24 14.259 25.25 16.0067 25.25C17.7281 25.25 17.9038 24 19 24C20.1309 24 20.2536 25.25 22.0033 25.25C23.7454 25.25 23.8824 24 25.0067 24C26.1111 24 26.2624 25.25 28 25.25V29ZM13.8571 12.75C13.144 12.75 12.5714 12.1934 12.5714 11.5C12.5714 10.2891 13.8571 10.6016 13.8571 9C14.3393 9 15.1429 10.1523 15.1429 11.1875C15.1429 12.2227 14.5703 12.75 13.8571 12.75ZM19 12.75C18.2868 12.75 17.7143 12.1934 17.7143 11.5C17.7143 10.2891 19 10.6016 19 9C19.4821 9 20.2857 10.1523 20.2857 11.1875C20.2857 12.2227 19.7132 12.75 19 12.75ZM24.1429 12.75C23.4297 12.75 22.8571 12.1934 22.8571 11.5C22.8571 10.2891 24.1429 10.6016 24.1429 9C24.625 9 25.4286 10.1523 25.4286 11.1875C25.4286 12.2227 24.856 12.75 24.1429 12.75Z" fill="black" fill-opacity="0.63"/>
</svg>
                </ListItem>
                <ListItem>
                <svg width="165" height="35" viewBox="0 0 165 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.48438 3.09662C7.82227 1.94939 6.30469 1.62713 5.32031 2.49078C2.06836 5.34597 0 9.6062 0 14.3756H15L8.48438 3.09662ZM29.0625 8.18827H26.25C24.1816 8.18827 22.5 10.038 22.5 12.3132V16.438H0C0 19.6993 1.34766 22.6511 3.5332 24.8618C1.50586 25.4354 0 27.4399 0 29.8439C0 32.6926 2.09766 35 4.6875 35C7.27734 35 9.375 32.6926 9.375 29.8439C9.375 29.2703 9.26953 28.7353 9.11719 28.2197C10.3828 28.6 11.7305 28.8127 13.125 28.8127C14.5195 28.8127 15.873 28.6 17.1328 28.2197C16.9746 28.7353 16.875 29.2703 16.875 29.8439C16.875 32.6926 18.9727 35 21.5625 35C24.1523 35 26.25 32.6926 26.25 29.8439C26.25 27.4399 24.7441 25.4354 22.7168 24.8618C24.9023 22.6511 26.25 19.6993 26.25 16.438V12.3132H29.0625C29.5781 12.3132 30 11.8491 30 11.2819V9.21949C30 8.65232 29.5781 8.18827 29.0625 8.18827ZM4.6875 31.9063C3.65625 31.9063 2.8125 30.9782 2.8125 29.8439C2.8125 28.7096 3.65625 27.7815 4.6875 27.7815C5.71875 27.7815 6.5625 28.7096 6.5625 29.8439C6.5625 30.9782 5.71875 31.9063 4.6875 31.9063ZM23.4375 29.8439C23.4375 30.9782 22.5938 31.9063 21.5625 31.9063C20.5312 31.9063 19.6875 30.9782 19.6875 29.8439C19.6875 28.7096 20.5312 27.7815 21.5625 27.7815C22.5938 27.7815 23.4375 28.7096 23.4375 29.8439Z" fill="black" fill-opacity="0.36"/>
<path d="M60.34 15.536C61.3453 15.8653 62.1427 16.42 62.732 17.2C63.3213 17.9627 63.616 18.916 63.616 20.06C63.616 21.6373 63.0093 22.8593 61.796 23.726C60.5827 24.5753 58.8147 25 56.492 25H47.444V6.8H55.972C58.1213 6.8 59.7767 7.22467 60.938 8.074C62.0993 8.906 62.68 10.0587 62.68 11.532C62.68 12.4333 62.472 13.2307 62.056 13.924C61.64 14.6173 61.068 15.1547 60.34 15.536ZM50.824 9.452V14.47H55.608C56.7867 14.47 57.688 14.262 58.312 13.846C58.9533 13.4127 59.274 12.7887 59.274 11.974C59.274 11.142 58.9533 10.518 58.312 10.102C57.688 9.66867 56.7867 9.452 55.608 9.452H50.824ZM56.284 22.348C58.9013 22.348 60.21 21.4727 60.21 19.722C60.21 17.9713 58.9013 17.096 56.284 17.096H50.824V22.348H56.284ZM80.8733 22.166V25H67.2233V6.8H80.5093V9.634H70.6033V14.366H79.3913V17.148H70.6033V22.166H80.8733ZM97.5373 15.536C98.5426 15.8653 99.3399 16.42 99.9293 17.2C100.519 17.9627 100.813 18.916 100.813 20.06C100.813 21.6373 100.207 22.8593 98.9933 23.726C97.7799 24.5753 96.0119 25 93.6893 25H84.6413V6.8H93.1693C95.3186 6.8 96.9739 7.22467 98.1353 8.074C99.2966 8.906 99.8773 10.0587 99.8773 11.532C99.8773 12.4333 99.6693 13.2307 99.2533 13.924C98.8373 14.6173 98.2653 15.1547 97.5373 15.536ZM88.0213 9.452V14.47H92.8053C93.9839 14.47 94.8853 14.262 95.5093 13.846C96.1506 13.4127 96.4713 12.7887 96.4713 11.974C96.4713 11.142 96.1506 10.518 95.5093 10.102C94.8853 9.66867 93.9839 9.452 92.8053 9.452H88.0213ZM93.4813 22.348C96.0986 22.348 97.4073 21.4727 97.4073 19.722C97.4073 17.9713 96.0986 17.096 93.4813 17.096H88.0213V22.348H93.4813ZM111.892 18.578V25H108.512V18.63L101.362 6.8H104.976L110.306 15.666L115.688 6.8H119.016L111.892 18.578ZM120.992 25.182C120.403 25.182 119.9 24.9827 119.484 24.584C119.068 24.168 118.86 23.648 118.86 23.024C118.86 22.3827 119.06 21.8627 119.458 21.464C119.874 21.0653 120.386 20.866 120.992 20.866C121.599 20.866 122.102 21.0653 122.5 21.464C122.916 21.8627 123.124 22.3827 123.124 23.024C123.124 23.648 122.916 24.168 122.5 24.584C122.084 24.9827 121.582 25.182 120.992 25.182ZM135.036 25.26C133.199 25.26 131.535 24.8613 130.044 24.064C128.571 23.2493 127.409 22.1313 126.56 20.71C125.728 19.2887 125.312 17.6853 125.312 15.9C125.312 14.1147 125.737 12.5113 126.586 11.09C127.435 9.66867 128.597 8.55933 130.07 7.762C131.561 6.94733 133.225 6.54 135.062 6.54C136.553 6.54 137.913 6.8 139.144 7.32C140.375 7.84 141.415 8.594 142.264 9.582L140.08 11.636C138.763 10.2147 137.142 9.504 135.218 9.504C133.97 9.504 132.852 9.78133 131.864 10.336C130.876 10.8733 130.105 11.6273 129.55 12.598C128.995 13.5687 128.718 14.6693 128.718 15.9C128.718 17.1307 128.995 18.2313 129.55 19.202C130.105 20.1727 130.876 20.9353 131.864 21.49C132.852 22.0273 133.97 22.296 135.218 22.296C137.142 22.296 138.763 21.5767 140.08 20.138L142.264 22.218C141.415 23.206 140.366 23.96 139.118 24.48C137.887 25 136.527 25.26 135.036 25.26ZM153.624 25.26C151.769 25.26 150.096 24.8613 148.606 24.064C147.115 23.2493 145.945 22.1313 145.096 20.71C144.246 19.2713 143.822 17.668 143.822 15.9C143.822 14.132 144.246 12.5373 145.096 11.116C145.945 9.67733 147.115 8.55933 148.606 7.762C150.096 6.94733 151.769 6.54 153.624 6.54C155.478 6.54 157.151 6.94733 158.642 7.762C160.132 8.55933 161.302 9.66867 162.152 11.09C163.001 12.5113 163.426 14.1147 163.426 15.9C163.426 17.6853 163.001 19.2887 162.152 20.71C161.302 22.1313 160.132 23.2493 158.642 24.064C157.151 24.8613 155.478 25.26 153.624 25.26ZM153.624 22.296C154.837 22.296 155.929 22.0273 156.9 21.49C157.87 20.9353 158.633 20.1727 159.188 19.202C159.742 18.214 160.02 17.1133 160.02 15.9C160.02 14.6867 159.742 13.5947 159.188 12.624C158.633 11.636 157.87 10.8733 156.9 10.336C155.929 9.78133 154.837 9.504 153.624 9.504C152.41 9.504 151.318 9.78133 150.348 10.336C149.377 10.8733 148.614 11.636 148.06 12.624C147.505 13.5947 147.228 14.6867 147.228 15.9C147.228 17.1133 147.505 18.214 148.06 19.202C148.614 20.1727 149.377 20.9353 150.348 21.49C151.318 22.0273 152.41 22.296 153.624 22.296Z" fill="black" fill-opacity="0.36"/>
</svg>
                </ListItem>
                <ListItem>
                <svg width="151" height="49" viewBox="0 0 151 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M49.216 15.56C51.64 15.56 53.56 16.268 54.976 17.684C56.392 19.076 57.1 21.176 57.1 23.984V35H52.6V24.56C52.6 22.88 52.228 21.62 51.484 20.78C50.74 19.916 49.672 19.484 48.28 19.484C46.768 19.484 45.556 19.988 44.644 20.996C43.732 21.98 43.276 23.396 43.276 25.244V35H38.776V24.56C38.776 22.88 38.404 21.62 37.66 20.78C36.916 19.916 35.848 19.484 34.456 19.484C32.92 19.484 31.696 19.976 30.784 20.96C29.896 21.944 29.452 23.372 29.452 25.244V35H24.952V15.776H29.236V18.224C29.956 17.36 30.856 16.7 31.936 16.244C33.016 15.788 34.216 15.56 35.536 15.56C36.976 15.56 38.248 15.836 39.352 16.388C40.48 16.916 41.368 17.708 42.016 18.764C42.808 17.756 43.828 16.976 45.076 16.424C46.324 15.848 47.704 15.56 49.216 15.56ZM70.1944 15.56C73.0264 15.56 75.1864 16.244 76.6744 17.612C78.1864 18.956 78.9424 20.996 78.9424 23.732V35H74.6944V32.66C74.1424 33.5 73.3504 34.148 72.3184 34.604C71.3104 35.036 70.0864 35.252 68.6464 35.252C67.2064 35.252 65.9464 35.012 64.8664 34.532C63.7864 34.028 62.9464 33.344 62.3464 32.48C61.7704 31.592 61.4824 30.596 61.4824 29.492C61.4824 27.764 62.1184 26.384 63.3904 25.352C64.6864 24.296 66.7144 23.768 69.4744 23.768H74.4424V23.48C74.4424 22.136 74.0344 21.104 73.2184 20.384C72.4264 19.664 71.2384 19.304 69.6544 19.304C68.5744 19.304 67.5064 19.472 66.4504 19.808C65.4184 20.144 64.5424 20.612 63.8224 21.212L62.0584 17.936C63.0664 17.168 64.2784 16.58 65.6944 16.172C67.1104 15.764 68.6104 15.56 70.1944 15.56ZM69.5824 31.976C70.7104 31.976 71.7064 31.724 72.5704 31.22C73.4584 30.692 74.0824 29.948 74.4424 28.988V26.756H69.7984C67.2064 26.756 65.9104 27.608 65.9104 29.312C65.9104 30.128 66.2344 30.776 66.8824 31.256C67.5304 31.736 68.4304 31.976 69.5824 31.976ZM82.7376 42.236C80.8416 42.236 79.4016 41.864 78.4176 41.12L79.7136 37.772C80.3856 38.276 81.2616 38.528 82.3416 38.528C83.1816 38.528 83.8176 38.264 84.2496 37.736C84.7056 37.232 84.9336 36.476 84.9336 35.468V15.776H89.4336V35.36C89.4336 37.496 88.8456 39.176 87.6696 40.4C86.4936 41.624 84.8496 42.236 82.7376 42.236ZM87.1656 12.608C86.3496 12.608 85.6656 12.356 85.1136 11.852C84.5616 11.324 84.2856 10.676 84.2856 9.908C84.2856 9.14 84.5616 8.504 85.1136 8C85.6656 7.472 86.3496 7.208 87.1656 7.208C87.9816 7.208 88.6656 7.46 89.2176 7.964C89.7696 8.444 90.0456 9.056 90.0456 9.8C90.0456 10.592 89.7696 11.264 89.2176 11.816C88.6896 12.344 88.0056 12.608 87.1656 12.608ZM95.3348 15.776H99.8348V35H95.3348V15.776ZM97.6028 12.608C96.7868 12.608 96.1028 12.356 95.5508 11.852C94.9988 11.324 94.7228 10.676 94.7228 9.908C94.7228 9.14 94.9988 8.504 95.5508 8C96.1028 7.472 96.7868 7.208 97.6028 7.208C98.4188 7.208 99.1028 7.46 99.6548 7.964C100.207 8.444 100.483 9.056 100.483 9.8C100.483 10.592 100.207 11.264 99.6548 11.816C99.1268 12.344 98.4428 12.608 97.6028 12.608ZM116.649 15.56C119.073 15.56 121.017 16.268 122.481 17.684C123.945 19.1 124.677 21.2 124.677 23.984V35H120.177V24.56C120.177 22.88 119.781 21.62 118.989 20.78C118.197 19.916 117.069 19.484 115.605 19.484C113.949 19.484 112.641 19.988 111.681 20.996C110.721 21.98 110.241 23.408 110.241 25.28V35H105.741V15.776H110.025V18.26C110.769 17.372 111.705 16.7 112.833 16.244C113.961 15.788 115.233 15.56 116.649 15.56ZM148.633 25.496C148.633 25.808 148.609 26.252 148.561 26.828H133.477C133.741 28.244 134.425 29.372 135.529 30.212C136.657 31.028 138.049 31.436 139.705 31.436C141.817 31.436 143.557 30.74 144.925 29.348L147.337 32.12C146.473 33.152 145.381 33.932 144.061 34.46C142.741 34.988 141.253 35.252 139.597 35.252C137.485 35.252 135.625 34.832 134.017 33.992C132.409 33.152 131.161 31.988 130.273 30.5C129.409 28.988 128.977 27.284 128.977 25.388C128.977 23.516 129.397 21.836 130.237 20.348C131.101 18.836 132.289 17.66 133.801 16.82C135.313 15.98 137.017 15.56 138.913 15.56C140.785 15.56 142.453 15.98 143.917 16.82C145.405 17.636 146.557 18.8 147.373 20.312C148.213 21.8 148.633 23.528 148.633 25.496ZM138.913 19.16C137.473 19.16 136.249 19.592 135.241 20.456C134.257 21.296 133.657 22.424 133.441 23.84H144.349C144.157 22.448 143.569 21.32 142.585 20.456C141.601 19.592 140.377 19.16 138.913 19.16Z" fill="black" fill-opacity="0.36"/>
<path d="M11.704 33.44C8.872 33.44 6.712 32.756 5.224 31.388C3.712 30.044 2.956 28.004 2.956 25.268V14H7.204V16.34C7.756 15.5 8.548 14.852 9.58 14.396C10.588 13.964 11.812 13.748 13.252 13.748C14.692 13.748 15.952 13.988 17.032 14.468C18.112 14.972 18.952 15.656 19.552 16.52C20.128 17.408 20.416 18.404 20.416 19.508C20.416 21.236 19.78 22.616 18.508 23.648C17.212 24.704 15.184 25.232 12.424 25.232H7.456V25.52C7.456 26.864 7.864 27.896 8.68 28.616C9.472 29.336 10.66 29.696 12.244 29.696C13.324 29.696 14.392 29.528 15.448 29.192C16.48 28.856 17.356 28.388 18.076 27.788L19.84 31.064C18.832 31.832 17.62 32.42 16.204 32.828C14.788 33.236 13.288 33.44 11.704 33.44ZM12.316 17.024C11.188 17.024 10.192 17.276 9.328 17.78C8.44 18.308 7.816 19.052 7.456 20.012V22.244H12.1C14.692 22.244 15.988 21.392 15.988 19.688C15.988 18.872 15.664 18.224 15.016 17.744C14.368 17.264 13.468 17.024 12.316 17.024Z" fill="black" fill-opacity="0.36"/>
<rect x="6.46448" y="40.4648" width="6.41421" height="6.41421" rx="2" transform="rotate(-45 6.46448 40.4648)" fill="black" fill-opacity="0.36"/>
</svg>

                </ListItem>
                <ListItem>
                <svg width="127" height="44" viewBox="0 0 127 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.24 21.896C22.632 22.352 23.736 23.12 24.552 24.2C25.368 25.256 25.776 26.576 25.776 28.16C25.776 30.344 24.936 32.036 23.256 33.236C21.576 34.412 19.128 35 15.912 35H3.384V9.8H15.192C18.168 9.8 20.46 10.388 22.068 11.564C23.676 12.716 24.48 14.312 24.48 16.352C24.48 17.6 24.192 18.704 23.616 19.664C23.04 20.624 22.248 21.368 21.24 21.896ZM8.064 13.472V20.42H14.688C16.32 20.42 17.568 20.132 18.432 19.556C19.32 18.956 19.764 18.092 19.764 16.964C19.764 15.812 19.32 14.948 18.432 14.372C17.568 13.772 16.32 13.472 14.688 13.472H8.064ZM15.624 31.328C19.248 31.328 21.06 30.116 21.06 27.692C21.06 25.268 19.248 24.056 15.624 24.056H8.064V31.328H15.624ZM38.9787 35.252C37.0347 35.252 35.2827 34.832 33.7227 33.992C32.1627 33.152 30.9387 31.988 30.0507 30.5C29.1867 28.988 28.7547 27.284 28.7547 25.388C28.7547 23.492 29.1867 21.8 30.0507 20.312C30.9387 18.824 32.1627 17.66 33.7227 16.82C35.2827 15.98 37.0347 15.56 38.9787 15.56C40.9467 15.56 42.7107 15.98 44.2707 16.82C45.8307 17.66 47.0427 18.824 47.9067 20.312C48.7947 21.8 49.2387 23.492 49.2387 25.388C49.2387 27.284 48.7947 28.988 47.9067 30.5C47.0427 31.988 45.8307 33.152 44.2707 33.992C42.7107 34.832 40.9467 35.252 38.9787 35.252ZM38.9787 31.4C40.6347 31.4 42.0027 30.848 43.0827 29.744C44.1627 28.64 44.7027 27.188 44.7027 25.388C44.7027 23.588 44.1627 22.136 43.0827 21.032C42.0027 19.928 40.6347 19.376 38.9787 19.376C37.3227 19.376 35.9547 19.928 34.8747 21.032C33.8187 22.136 33.2907 23.588 33.2907 25.388C33.2907 27.188 33.8187 28.64 34.8747 29.744C35.9547 30.848 37.3227 31.4 38.9787 31.4ZM62.1818 35.252C60.2378 35.252 58.4858 34.832 56.9258 33.992C55.3658 33.152 54.1418 31.988 53.2538 30.5C52.3898 28.988 51.9578 27.284 51.9578 25.388C51.9578 23.492 52.3898 21.8 53.2538 20.312C54.1418 18.824 55.3658 17.66 56.9258 16.82C58.4858 15.98 60.2378 15.56 62.1818 15.56C64.1498 15.56 65.9138 15.98 67.4738 16.82C69.0338 17.66 70.2458 18.824 71.1098 20.312C71.9978 21.8 72.4418 23.492 72.4418 25.388C72.4418 27.284 71.9978 28.988 71.1098 30.5C70.2458 31.988 69.0338 33.152 67.4738 33.992C65.9138 34.832 64.1498 35.252 62.1818 35.252ZM62.1818 31.4C63.8378 31.4 65.2058 30.848 66.2858 29.744C67.3658 28.64 67.9058 27.188 67.9058 25.388C67.9058 23.588 67.3658 22.136 66.2858 21.032C65.2058 19.928 63.8378 19.376 62.1818 19.376C60.5258 19.376 59.1578 19.928 58.0778 21.032C57.0218 22.136 56.4938 23.588 56.4938 25.388C56.4938 27.188 57.0218 28.64 58.0778 29.744C59.1578 30.848 60.5258 31.4 62.1818 31.4ZM82.685 35.252C81.125 35.252 79.601 35.048 78.113 34.64C76.625 34.232 75.437 33.716 74.549 33.092L76.277 29.672C77.141 30.248 78.173 30.716 79.373 31.076C80.597 31.412 81.797 31.58 82.973 31.58C85.661 31.58 87.005 30.872 87.005 29.456C87.005 28.784 86.657 28.316 85.961 28.052C85.289 27.788 84.197 27.536 82.685 27.296C81.101 27.056 79.805 26.78 78.797 26.468C77.813 26.156 76.949 25.616 76.205 24.848C75.485 24.056 75.125 22.964 75.125 21.572C75.125 19.748 75.881 18.296 77.393 17.216C78.929 16.112 80.993 15.56 83.585 15.56C84.905 15.56 86.225 15.716 87.545 16.028C88.865 16.316 89.945 16.712 90.785 17.216L89.057 20.636C87.425 19.676 85.589 19.196 83.549 19.196C82.229 19.196 81.221 19.4 80.525 19.808C79.853 20.192 79.517 20.708 79.517 21.356C79.517 22.076 79.877 22.592 80.597 22.904C81.341 23.192 82.481 23.468 84.017 23.732C85.553 23.972 86.813 24.248 87.797 24.56C88.781 24.872 89.621 25.4 90.317 26.144C91.037 26.888 91.397 27.944 91.397 29.312C91.397 31.112 90.617 32.552 89.057 33.632C87.497 34.712 85.373 35.252 82.685 35.252ZM101.212 35.252C99.6523 35.252 98.1283 35.048 96.6403 34.64C95.1523 34.232 93.9643 33.716 93.0763 33.092L94.8043 29.672C95.6683 30.248 96.7003 30.716 97.9003 31.076C99.1243 31.412 100.324 31.58 101.5 31.58C104.188 31.58 105.532 30.872 105.532 29.456C105.532 28.784 105.184 28.316 104.488 28.052C103.816 27.788 102.724 27.536 101.212 27.296C99.6283 27.056 98.3323 26.78 97.3243 26.468C96.3403 26.156 95.4763 25.616 94.7323 24.848C94.0123 24.056 93.6523 22.964 93.6523 21.572C93.6523 19.748 94.4083 18.296 95.9203 17.216C97.4563 16.112 99.5203 15.56 102.112 15.56C103.432 15.56 104.752 15.716 106.072 16.028C107.392 16.316 108.472 16.712 109.312 17.216L107.584 20.636C105.952 19.676 104.116 19.196 102.076 19.196C100.756 19.196 99.7483 19.4 99.0523 19.808C98.3803 20.192 98.0443 20.708 98.0443 21.356C98.0443 22.076 98.4043 22.592 99.1243 22.904C99.8683 23.192 101.008 23.468 102.544 23.732C104.08 23.972 105.34 24.248 106.324 24.56C107.308 24.872 108.148 25.4 108.844 26.144C109.564 26.888 109.924 27.944 109.924 29.312C109.924 31.112 109.144 32.552 107.584 33.632C106.024 34.712 103.9 35.252 101.212 35.252ZM125.356 33.956C124.828 34.388 124.18 34.712 123.412 34.928C122.668 35.144 121.876 35.252 121.036 35.252C118.924 35.252 117.292 34.7 116.14 33.596C114.988 32.492 114.412 30.884 114.412 28.772V19.52H111.244V15.92H114.412V11.528H118.912V15.92H124.06V19.52H118.912V28.664C118.912 29.6 119.14 30.32 119.596 30.824C120.052 31.304 120.712 31.544 121.576 31.544C122.584 31.544 123.424 31.28 124.096 30.752L125.356 33.956Z" fill="black" fill-opacity="0.36"/>
</svg>
                </ListItem>
                <ListItem>
                <svg width="152" height="32" viewBox="0 0 152 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M57.616 6.8V25H54.236V17.2H44.824V25H41.444V6.8H44.824V14.314H54.236V6.8H57.616ZM62.1808 11.116H65.4308V25H62.1808V11.116ZM63.8188 8.828C63.2295 8.828 62.7355 8.646 62.3368 8.282C61.9382 7.90067 61.7388 7.43267 61.7388 6.878C61.7388 6.32333 61.9382 5.864 62.3368 5.5C62.7355 5.11867 63.2295 4.928 63.8188 4.928C64.4082 4.928 64.9022 5.11 65.3008 5.474C65.6995 5.82067 65.8988 6.26267 65.8988 6.8C65.8988 7.372 65.6995 7.85733 65.3008 8.256C64.9195 8.63733 64.4255 8.828 63.8188 8.828ZM83.4765 11.116V22.894C83.4765 27.782 80.9805 30.226 75.9885 30.226C74.6538 30.226 73.3885 30.0527 72.1925 29.706C70.9965 29.3767 70.0085 28.8913 69.2285 28.25L70.6845 25.806C71.2911 26.3087 72.0538 26.7073 72.9725 27.002C73.9085 27.314 74.8531 27.47 75.8065 27.47C77.3318 27.47 78.4498 27.1233 79.1605 26.43C79.8711 25.7367 80.2265 24.6793 80.2265 23.258V22.53C79.6718 23.1367 78.9958 23.596 78.1985 23.908C77.4011 24.22 76.5258 24.376 75.5725 24.376C74.2551 24.376 73.0591 24.0987 71.9845 23.544C70.9271 22.972 70.0865 22.1747 69.4625 21.152C68.8558 20.1293 68.5525 18.9593 68.5525 17.642C68.5525 16.3247 68.8558 15.1633 69.4625 14.158C70.0865 13.1353 70.9271 12.3467 71.9845 11.792C73.0591 11.2373 74.2551 10.96 75.5725 10.96C76.5778 10.96 77.4878 11.1247 78.3025 11.454C79.1345 11.7833 79.8278 12.286 80.3825 12.962V11.116H83.4765ZM76.0665 21.62C77.2971 21.62 78.3025 21.256 79.0825 20.528C79.8798 19.7827 80.2785 18.8207 80.2785 17.642C80.2785 16.4807 79.8798 15.536 79.0825 14.808C78.3025 14.08 77.2971 13.716 76.0665 13.716C74.8185 13.716 73.7958 14.08 72.9985 14.808C72.2185 15.536 71.8285 16.4807 71.8285 17.642C71.8285 18.8207 72.2185 19.7827 72.9985 20.528C73.7958 21.256 74.8185 21.62 76.0665 21.62ZM95.6272 10.96C97.3779 10.96 98.7819 11.4713 99.8392 12.494C100.897 13.5167 101.425 15.0333 101.425 17.044V25H98.1752V17.46C98.1752 16.2467 97.8892 15.3367 97.3172 14.73C96.7452 14.106 95.9305 13.794 94.8732 13.794C93.6772 13.794 92.7325 14.158 92.0392 14.886C91.3459 15.5967 90.9992 16.628 90.9992 17.98V25H87.7492V5.708H90.9992V12.728C91.5365 12.156 92.1952 11.7227 92.9752 11.428C93.7725 11.116 94.6565 10.96 95.6272 10.96ZM105.548 5.708H108.798V25H105.548V5.708ZM119.304 25.182C117.9 25.182 116.634 24.8787 115.508 24.272C114.381 23.6653 113.497 22.8247 112.856 21.75C112.232 20.658 111.92 19.4273 111.92 18.058C111.92 16.6887 112.232 15.4667 112.856 14.392C113.497 13.3173 114.381 12.4767 115.508 11.87C116.634 11.2633 117.9 10.96 119.304 10.96C120.725 10.96 121.999 11.2633 123.126 11.87C124.252 12.4767 125.128 13.3173 125.752 14.392C126.393 15.4667 126.714 16.6887 126.714 18.058C126.714 19.4273 126.393 20.658 125.752 21.75C125.128 22.8247 124.252 23.6653 123.126 24.272C121.999 24.8787 120.725 25.182 119.304 25.182ZM119.304 22.4C120.5 22.4 121.488 22.0013 122.268 21.204C123.048 20.4067 123.438 19.358 123.438 18.058C123.438 16.758 123.048 15.7093 122.268 14.912C121.488 14.1147 120.5 13.716 119.304 13.716C118.108 13.716 117.12 14.1147 116.34 14.912C115.577 15.7093 115.196 16.758 115.196 18.058C115.196 19.358 115.577 20.4067 116.34 21.204C117.12 22.0013 118.108 22.4 119.304 22.4ZM151.099 11.116L145.977 25H142.857L139.269 15.432L135.629 25H132.509L127.413 11.116H130.481L134.147 21.36L137.969 11.116H140.699L144.443 21.412L148.213 11.116H151.099Z" fill="black" fill-opacity="0.36"/>
<path d="M13.5 31C20.9558 31 27 25.1797 27 18C27 10.8203 20.9558 5 13.5 5C6.04419 5 2.4064e-07 10.8203 1.55023e-07 18C6.94067e-08 25.1797 6.04414 31 13.5 31ZM23.5161 18L3.48387 18C3.48387 12.6687 7.96451 8.35484 13.5 8.35484C19.0364 8.35484 23.5161 12.6695 23.5161 18Z" fill="black" fill-opacity="0.36"/>
</svg>

                </ListItem>
               

            </List>
        </Grid>
        
        </>
    )
}

export default ListNav