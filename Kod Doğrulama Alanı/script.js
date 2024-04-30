const codes = document.querySelectorAll(".CodeChild");
//querySelectorAll kullnımında genelde foreach kullanılır
//ilk kutucuk odaklanır.
codes[0].focus();

codes.forEach((code, index) => {
    code.addEventListener("keydown", (e) => {
        //Eğer değer 0 ile 9 arasındaysa
        if (e.key >= 0 && e.key <= 9) {
            //şuanki kod öğesini temizle
            codes[index].value = "";

            //Bir sonraki kod öğesine 10ms sonra odaklan.
            setTimeout(() => codes[index + 1].focus(), 10);
        }

        //eğer silme işlemi yapılırsa
        else if(e.key==="Backspace")
        {
            setTimeout(() => codes[index -1 ].focus(),10);
        }
    })
})