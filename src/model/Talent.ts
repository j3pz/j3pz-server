import { Resource } from './Server';
import { Talent } from '../entities/resources/Talent';
import { TalentRecommend } from '../entities/resources/TalentRecommend';

export type TalentResource = Resource<Talent>;
export type TalentRecommendResource = Resource<TalentRecommend>;
