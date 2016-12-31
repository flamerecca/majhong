#pragma strict

public var ScoreText: UI.Text;
public var EndTitle: UI.Text;

public var RestartButton: GameObject;
public var QuitButton: GameObject;

private var count = 0;
private var card = [1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9];

function Start () {
	count = 100;

	//ScoreText = gameObject.Find("ScoreText").GetComponent(UI.Text);
	//WinTitle = gameObject.Find("WinTitle");
	//GameOverTitle = gameObject.Find("GameOverTitle");
	//myObject = gameObject.Find("GameOverTitle");

	EndTitle.enabled = false;
	RestartButton.SetActive(false);
	QuitButton.SetActive(false);
    //Debug.Log("Active Self: " + myObject.activeSelf);
    //Debug.Log("Active in Hierarchy: " + myObject.activeInHierarchy);
    RenderPlayerCard();


}
function RenderPlayerCard(){
	shuffle(card);


}


function Update () {

	
	ScoreText.text = "點數：" + count.ToString();
	if(count > 200){
		win();
	}
	if(count < 0){
		lose();
	}

}

function addPoint (){
	count += 10;

}

function shuffle(array: Array) {
	var temp;
	var randomIndex = 0;

	// While there remain elements to shuffle...
	for (var i=0; i < array.length; i++) {
		temp = array[i];
		randomIndex = Random.Range(i, array.Count);
		array[i] = array[randomIndex];
		array[randomIndex] = temp;
	}
	return array;
}

function win (){
	EndTitle.text = "你贏了";
	EndTitle.enabled = true;

	RestartButton.SetActive(true);
	QuitButton.SetActive(true);
	System.GC.Collect();
}

function lose (){
	EndTitle.text = "你輸了";
	EndTitle.enabled = true;

	RestartButton.SetActive(true);
	QuitButton.SetActive(true);
	System.GC.Collect();
}

function ResetGame() {//RestartButton的功能
	UnityEngine.SceneManagement.SceneManager.LoadScene(UnityEngine.SceneManagement.SceneManager.GetActiveScene().buildIndex);//讀取關卡(已讀取的關卡)
}

function QuitGame() {//QuitButton的功能
	Application.Quit(); //離開應用程式
}