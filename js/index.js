function openTab(evt, tabName) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent"); // 컨텐츠를 불러옵니다.
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none"; //컨텐츠를 모두 숨깁니다.
      }

      tablinks = document.getElementsByClassName("tabButtonItem"); //탭을 불러옵니다.
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", ""); //탭을 초기화시킵니다.
      }
      tablinks = document.getElementsByClassName("tabButtonItem-home"); // 탭 클래스 이름이 두개라서 하나 추가
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", ""); 
      }

      document.getElementById(tabName).style.display = "block"; //해당되는 컨텐츠만 보여줍니다.
      evt.currentTarget.className += " active"; //클릭한 탭을 활성화시킵니다.
}


