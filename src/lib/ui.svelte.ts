export class UIState {
	isShaking = $state(false);

	triggerShake() {
		if (this.isShaking) return;

		this.isShaking = true;
		setTimeout(() => {
			this.isShaking = false;
		}, 500);
	}
}

export const ui = new UIState();
