#pragma strict
public var player: PlayerController;

function Start () {

}

function Update () {
	if (Input.GetKey(KeyCode.RightArrow)) {
		gameObject.transform.position += new Vector3(0.1f,0,0);
	}
}

function OnMouseDown() {
	player.addPoint(); 
}