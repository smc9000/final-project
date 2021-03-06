document.addEventListener("DOMContentLoaded", () => {
document.querySelector("#lecture").onclick = () => {
    
    clear()
    document.querySelector("#dropdownMenuButtonForSchedule").innerHTML = "Schedule";

    document.querySelector("#dropdownMenuButton").innerHTML = "Lecture";
    console.log("i m here now");
    const request = new XMLHttpRequest();
    let api = "http://127.0.0.1:3000/courses/qByLectureType/lecture";
    request.open("GET", api);
    console.log(api);
    request.onload = () => {
      const data = JSON.parse(request.responseText);
      console.log(data);
      data.map(course => {
        let info = process_data(course);
        document.querySelector("#result").innerHTML += info;
      }
              );
    };
    request.send();
    return false;
  };


  document.querySelector("#lab").onclick = () => {
    clear()
    document.querySelector("#dropdownMenuButtonForSchedule").innerHTML = "Schedule";
  
    document.querySelector("#dropdownMenuButton").innerHTML = "Lab";
    console.log("entry");
    const request = new XMLHttpRequest();
    let api = "http://127.0.0.1:3000/courses/qByLectureType/lab";
    request.open("GET", api);
    console.log(api);
    request.onload = () => {
      const data = JSON.parse(request.responseText);
      console.log(data);
      data.map(course => {
        let info = process_data(course);
        document.querySelector("#result").innerHTML += info;
      }
              );
    };
    request.send();
    return false;
  };


  document.querySelector("#hybrid").onclick = () => {
    clear()
    document.querySelector("#dropdownMenuButtonForSchedule").innerHTML = "Schedule";
    document.querySelector("#dropdownMenuButton").innerHTML = "Hybrid";
    console.log("entry");
    const request = new XMLHttpRequest();
    let api = "http://127.0.0.1:3000/courses/qByLectureType/hybrid";
    request.open("GET", api);
    console.log(api);
    request.onload = () => {
      const data = JSON.parse(request.responseText);
      console.log(data);
      data.map(course => {
        let info = process_data(course);
        document.querySelector("#result").innerHTML += info;
      }
            );
    };
    request.send();
    return false;
  };
}
        );


document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#monday").onclick = () => {
    clear()
    document.querySelector("#dropdownMenuButton").innerHTML = "Lecture Type";
    document.querySelector("#dropdownMenuButtonForSchedule").innerHTML = "Monday";
    console.log("entry");
    let date = document.querySelector('#monday')
    console.log(day.getAttribute('data-date'))
    const request = new XMLHttpRequest();
    let api = "http://127.0.0.1:3000/courses/qBySchedule/monday";
    request.open("GET", api);
    console.log(api);
    request.onload = () => {
      const data = JSON.parse(request.responseText);
      console.log(data);
      data.map(course => {
        let info = process_data(course);
        document.querySelector("#result").innerHTML += info;
      }
           );
    };
    request.send();
    return false;
  };

  document.querySelector("#tuesday").onclick = () => {
    clear()
    document.querySelector("#dropdownMenuButton").innerHTML = "Lecture Type";
    document.querySelector("#dropdownMenuButtonForSchedule").innerHTML = "Tuesday";
    console.log("entry");
    const request = new XMLHttpRequest();
    let api = "http://127.0.0.1:3000/courses/qBySchedule/tuesday";
    request.open("GET", api);
    console.log(api);
    request.onload = () => {
      const data = JSON.parse(request.responseText);
      console.log(data);
      data.map(course => {
        let info = process_data(course);
        document.querySelector("#result").innerHTML += info;
      }
         );
    };
    request.send();
    return false;
  };

  document.querySelector("#wednesday").onclick = () => {
    clear()
    document.querySelector("#dropdownMenuButton").innerHTML = "Lecture Type";
    document.querySelector("#dropdownMenuButtonForSchedule").innerHTML = "Wednesday";
    console.log("entry");
    const request = new XMLHttpRequest();
    let api = "http://127.0.0.1:3000/courses/qBySchedule/wednesday";
    request.open("GET", api);
    console.log(api);
    request.onload = () => {
      const data = JSON.parse(request.responseText);
      console.log(data);
      data.map(course => {
        let info = process_data(course);
        document.querySelector("#result").innerHTML += info;
      }
      );
    };
    request.send();
    return false;
  };

  document.querySelector("#thursday").onclick = () => {
    clear()
    document.querySelector("#dropdownMenuButton").innerHTML = "Lecture Type";
    document.querySelector("#dropdownMenuButtonForSchedule").innerHTML = "Thursday";
    console.log("entry");
    const request = new XMLHttpRequest();
    let api = "http://127.0.0.1:3000/courses/qBySchedule/thursday";
    request.open("GET", api);
    console.log(api);
    request.onload = () => {
      const data = JSON.parse(request.responseText);
      console.log(data);
      data.map(course => {
        let info = process_data(course);
        document.querySelector("#result").innerHTML += info;
      }
        );
    };
    request.send();
    return false;
  };

  document.querySelector("#friday").onclick = () => {
    clear()
    document.querySelector("#dropdownMenuButton").innerHTML = "Lecture Type";
    document.querySelector("#dropdownMenuButtonForSchedule").innerHTML = "Friday";
    console.log("entry");
    const request = new XMLHttpRequest();
    let api = "http://127.0.0.1:3000/courses/qBySchedule/friday";
    request.open("GET", api);
    console.log(api);
    request.onload = () => {
      const data = JSON.parse(request.responseText);
      console.log(data);
      data.map(course => {
        let info = process_data(course);
        document.querySelector("#result").innerHTML += info;
      }
         );
    };
    request.send();
    return false;
  };
  document.querySelector("#saturday").onclick = () => {
    clear()
    document.querySelector("#dropdownMenuButton").innerHTML = "Lecture Type";
    document.querySelector("#dropdownMenuButtonForSchedule").innerHTML = "Saturday";
    console.log("entry");
    const request = new XMLHttpRequest();
    let api = "http://127.0.0.1:3000/courses/qBySchedule/saturday";
    request.open("GET", api);
    console.log(api);
    request.onload = () => {
      const data = JSON.parse(request.responseText);
      console.log(data);
      data.map(course => {
        let info = process_data(course);
        document.querySelector("#result").innerHTML += info;
      }
       );
    };
    request.send();
    return false;
  };
}
     );

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#seats").onclick = () => {
    document.querySelector("#result").innerHTML = "";

    const request = new XMLHttpRequest();

    let api = "http://127.0.0.1:3000/courses/qBySeats";

    request.open("GET", api);
    request.onload = () => {
      const data = JSON.parse(request.responseText);
      data.map(course => {
        let info = process_data(course);
        document.querySelector("#result").innerHTML += info;
      }
        );
    };
    request.send();
    return false;
  };
}
      );

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#clear").onclick = () => {
    clear()
    document.querySelector("#dropdownMenuButton").innerHTML = "Lecture Type";
    document.querySelector("#dropdownMenuButtonForSchedule").innerHTML = "Schedule";
  };
}
  );

function clear(){
  document.querySelector("#result").innerHTML = "";
  document.querySelector("#title-value").value = "";
  document.querySelector("#name-value").value = "";
  document.querySelector("#instructor-value").value = "";
}



function process_data(course) {
  return `<tr>
    <td>${course.title}</td>
    <td>${course.name}</td>
    <td>${course.schedule.map(schedule => {
      return `<p>${schedule.date}: ${schedule.time}</p>`;
    })}</td>
    <td>${course.instructor}</td>
    <td>${course.credits}</td>
    <td>${course.lecture_type}</td>
    <td>${course.seats}</td>
    </tr>`;
}

document.addEventListener("DOMContentLoaded", () => {
document.querySelector("#advance").onclick = () => {
document.querySelector("#result").innerHTML = "";

    let mytitle = document.querySelector("#title-value").value;
    let myname = document.querySelector("#name-value").value;
    let myinstructor = document.querySelector("#instructor-value").value;
  
    if (mytitle === "") {
      mytitle = "none";
    }

    if (myname === "") {
      myname = "none";
    }

    if (myinstructor === "") {
      myinstructor = "none";
    }
    const request = new XMLHttpRequest();

    let api = `http://127.0.0.1:3000/courses/qByTitle/${mytitle}/qByName/${myname}/qByInstructor/${myinstructor}`;

    request.open("GET", api);
    request.onload = () => {
      const data = JSON.parse(request.responseText);
      data.map(course => {
        let info = process_data(course);
        document.querySelector("#result").innerHTML += info;
      }
      );
    };
    request.send();
    return false;
  };
}
    );
