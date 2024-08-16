var outputDiv = document.getElementById('output');
    var colorIndex = 0;
    var colorSet = ["red","green","blue","pink","white","black","yellow"];
    
    function changeColor() {
        blankAll();
        var background = document.getElementById("body");
        ("body");
        if (colorIndex >= colorSet.length) {
            colorIndex = 0;
        }
        background.style.backgroundColor = colorSet[colorIndex];
        colorIndex++;
    }
    function changeFontColor() {
        blankAll();
        var backgroundFont = document.getElementById("body");
        if (colorIndex >= colorSet.length) {
            colorIndex = 0;
        }
        backgroundFont.style.color = colorSet[colorIndex];
        colorIndex++;
    }
    function resetColor() {
        blankAll();
        document.getElementById("body").style.backgroundColor='white';
        document.getElementById("body").style.color='black';
    }
    
    var showBtn = 0;
    function setTlf() {
        showBtn = 98074700;
        outputDiv.innerHTML = showBtn;
    }
    function setMail(){
        showBtn = `<a href="mailto:christofferjaco@getacademy.no">Mail</a>`;
        outputDiv.innerHTML = showBtn;
    }
    
    function show2() {
        blankAll();   
        document.getElementById('dropTag2').innerHTML = /*HTML*/`
        <div>
            <p>Mine hobbyer er: </p>
            <li>Bygge og kjøre race-droner</li>
            <li>3d printing</li>
            <li>være med venner</li>
            <li>binge serier</li>
            <li>og nå pluselig koding?</li>
            </div>
                
                `;
            }
            function show3() {
                blankAll();     
                document.getElementById('dropTag3').innerHTML = /*HTML*/`
                <div id="bilde"></div>
                `;
            }
            
        function show1() {
            blankAll();     
            document.getElementById('dropTag1').innerHTML = /*HTML*/`
            <div class="counter">
                <div id ="telleLabel">0</div>
                </div>         
                <div class=telleBtn>
                    <button id="minusBtn" onclick="minus()">-</button>
                    <button id="resetBtn" onclick="reset()">reset</button>
                    <button id="plussBtn" onclick="pluss()">+</button>
                    </div>  
                        `;
                    }
                    let teller = 0;
                    function minus() {
                        teller -=1;
                        document.getElementById("telleLabel").innerHTML = teller;
                    }
                    function reset() {
                        teller =0;
                        document.getElementById("telleLabel").innerHTML = teller;
                    }
                    function pluss() {
                        teller +=1;
                        document.getElementById("telleLabel").innerHTML = teller;
                    }
                    function blankAll() {
                    document.getElementById('dropTag1').innerHTML = ``;
                    document.getElementById('dropTag2').innerHTML = ``;
                    document.getElementById('dropTag3').innerHTML = ``;
                   
                    }