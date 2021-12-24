export const AnimationHandler = (animationStateId: string, animations: Array<string>, callBacks?: Array <any>) => {
    const animationState = document.getElementById(animationStateId);
    
    if (animationState) {
        animationState.className = animations[0];
        setTimeout( () => {
            animationState.className = animations[1];
            if (callBacks) {
                for (let func of callBacks) {
                    func();
                }
            }
        }, 300);
    }
}