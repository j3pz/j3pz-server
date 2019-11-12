import { KungFu } from '../model/Base';
import { KungFuMeta } from './KungfuMeta';
import { 花间游, 离经易道 } from './schools/万花';
import { 易筋经, 洗髓经 } from './schools/少林';
import { 冰心诀, 云裳心经 } from './schools/七秀';
import { 傲血战意, 铁牢律 } from './schools/天策';
import { 紫霞功, 太虚剑意 } from './schools/纯阳';
import { 问水诀, 山居剑意 } from './schools/藏剑';
import { 毒经, 补天诀 } from './schools/五毒';
import { 天罗诡道, 惊羽诀 } from './schools/唐门';
import { 焚影圣诀, 明尊琉璃体 } from './schools/明教';
import { 笑尘诀 } from './schools/丐帮';
import { 分山劲, 铁骨衣 } from './schools/苍云';
import { 莫问, 相知 } from './schools/长歌';
import { 北傲诀 } from './schools/霸刀';
import { 凌海诀 } from './schools/蓬莱';
import { 隐龙诀 } from './schools/凌雪';

export const kungFuLib: {[k in KungFu]: KungFuMeta} = {
    花间游,
    离经易道,
    易筋经,
    洗髓经,
    冰心诀,
    云裳心经,
    傲血战意,
    铁牢律,
    紫霞功,
    太虚剑意,
    山居剑意,
    问水诀,
    毒经,
    补天诀,
    天罗诡道,
    惊羽诀,
    焚影圣诀,
    明尊琉璃体,
    笑尘诀,
    分山劲,
    铁骨衣,
    相知,
    莫问,
    北傲诀,
    凌海诀,
    隐龙诀,
};
