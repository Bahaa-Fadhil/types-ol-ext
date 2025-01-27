import { FeatureAnimation, FeatureAnimationEvent, Options as FeatureAnimationOptions } from './FeatureAnimation';
export interface Options extends FeatureAnimationOptions {
    speed?: number;
}
/** Fade animation: feature fade in
 * @constructor
 * @extends {ol_featureAnimation}
 * @param {ol_featureAnimationOptions} options
 */
export default class Fade extends FeatureAnimation {
    constructor(options?: FeatureAnimationOptions);
    /** Animate
    * @param {featureAnimationEvent} e
     */
    animate(e: FeatureAnimationEvent): boolean;
}

