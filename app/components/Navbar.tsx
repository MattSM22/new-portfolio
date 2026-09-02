import Link from "next/link";

export default function Navbar(){
  return (
    <nav className="w-full h-18 py-2">
      <div className="flex flex-row justify-evenly items-center">

        <div>
          <svg xmlns="http://www.w3.org/2000/svg"
              viewBox="138 218 978 784"
              width="50" height="50"
              role="img" aria-label="Logo MSM">
            
            <path d="M 592 604 L 593 605 L 592 870 L 589 879 L 582 887 L 571 893 L 559 895 L 558 902 L 695 902 L 696 895 L 678 893 L 664 886 L 658 880 L 653 865 L 653 648 L 594 604 Z M 552 395 L 552 404 L 559 404 L 574 407 L 582 411 L 590 420 L 593 431 L 593 457 L 652 507 L 653 507 L 653 486 L 654 485 L 739 579 L 807 650 L 835 621 L 961 480 L 962 481 L 962 854 L 958 870 L 952 879 L 946 885 L 930 893 L 906 895 L 906 903 L 1091 903 L 1091 895 L 1068 893 L 1057 888 L 1050 883 L 1043 874 L 1037 857 L 1037 442 L 1040 432 L 1048 419 L 1062 409 L 1076 405 L 1084 405 L 1084 394 L 977 394 L 823 579 L 666 394 L 553 394 Z M 170 394 L 170 404 L 171 405 L 178 405 L 190 408 L 198 412 L 207 419 L 215 432 L 218 444 L 217 858 L 212 873 L 202 885 L 186 893 L 174 895 L 162 895 L 162 903 L 299 903 L 299 895 L 277 894 L 269 892 L 256 885 L 248 876 L 244 867 L 243 861 L 243 482 L 244 481 L 445 712 L 555 609 L 574 589 L 537 563 L 475 631 L 276 394 Z M 648 242 L 612 243 L 572 251 L 550 259 L 532 268 L 506 285 L 480 310 L 460 340 L 453 355 L 448 370 L 443 398 L 443 420 L 447 442 L 452 457 L 457 467 L 473 491 L 490 508 L 506 521 L 640 617 L 716 675 L 745 703 L 761 723 L 775 747 L 784 772 L 787 791 L 787 812 L 783 836 L 778 851 L 765 876 L 756 888 L 737 907 L 712 923 L 698 929 L 684 933 L 667 936 L 650 936 L 649 937 L 618 934 L 600 930 L 580 923 L 547 906 L 514 881 L 484 849 L 465 822 L 445 784 L 432 748 L 424 709 L 419 728 L 413 763 L 411 808 L 412 809 L 413 829 L 418 852 L 426 873 L 435 890 L 448 908 L 461 922 L 478 936 L 500 950 L 521 960 L 538 966 L 566 973 L 587 976 L 607 977 L 608 976 L 639 975 L 674 968 L 713 954 L 735 943 L 754 931 L 786 904 L 799 890 L 817 865 L 829 841 L 834 827 L 841 791 L 841 765 L 838 743 L 835 732 L 822 701 L 802 671 L 776 642 L 702 571 L 546 437 L 526 416 L 516 401 L 512 392 L 506 367 L 507 346 L 512 330 L 517 320 L 532 300 L 554 282 L 578 271 L 609 265 L 627 265 L 648 268 L 676 277 L 702 291 L 723 307 L 747 332 L 763 354 L 781 390 L 787 411 L 790 412 L 790 297 L 784 291 L 766 279 L 724 258 L 691 248 L 669 244 L 649 243 Z" fill="#FFFFFF" fillRule="evenodd" clipRule="evenodd"/>
          </svg>
        </div>
        
        <div>
          <ul className="list-none flex flex-row gap-6 text-gray-400">
            <Link className="links" href=""><li>About</li></Link>
            <Link className="links" href= ""><li>Skills</li></Link>
            <Link className="links" href= ""><li>Projects</li></Link>
            <Link className="links" href= ""><li>Experience</li></Link>
            <Link className="links" href= ""><li>Contact</li></Link>
          </ul>
        </div>
        
        <div>
          <button className="h-10 w-20 bg-purple-800 rounded-lg ">
            Hire me
          </button>
        </div>
      </div>
    </nav>
  )
}