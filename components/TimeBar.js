const TimeBar = () => {
    return(
        <div className="bartime pt-4">
            <ul className="pl-10 flex flex-row space-x-5 h-10">
                <li><button>Hour</button> </li>
                <li><button>Day</button> </li>
                <li><button>Week</button> </li>
                <li><button>Month</button> </li>
                <li><button>Year</button> </li>
            </ul>
        </div>
    )
}
export default TimeBar;