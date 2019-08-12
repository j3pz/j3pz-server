import { PrimaryAttribute, KungFu, School } from '../model/Base';

export interface KungFuMeta {
    primaryAttribute: PrimaryAttribute;
    school: School;
}

// todo: 拆分到门派
export const kungFuMeta: {[k in KungFu]: KungFuMeta} = {
    花间游: {
        primaryAttribute: 'spunk',
        school: '万花',
    },
    离经易道: {
        primaryAttribute: 'heal',
        school: '万花',
    },
    易筋经: {
        primaryAttribute: 'spunk',
        school: '少林',
    },
    洗髓经: {
        primaryAttribute: 'vitality',
        school: '少林',
    },
    冰心诀: {
        primaryAttribute: 'spirit',
        school: '七秀',
    },
    云裳心经: {
        primaryAttribute: 'heal',
        school: '七秀',
    },
    傲血战意: {
        primaryAttribute: 'strength',
        school: '天策',
    },
    铁牢律: {
        primaryAttribute: 'vitality',
        school: '天策',
    },
    紫霞功: {
        primaryAttribute: 'spirit',
        school: '纯阳',
    },
    太虚剑意: {
        primaryAttribute: 'agility',
        school: '纯阳',
    },
    山居剑意: {
        primaryAttribute: 'agility',
        school: '藏剑',
    },
    问水诀: {
        primaryAttribute: 'agility',
        school: '藏剑',
    },
    毒经: {
        primaryAttribute: 'spirit',
        school: '五毒',
    },
    补天诀: {
        primaryAttribute: 'heal',
        school: '五毒',
    },
    天罗诡道: {
        primaryAttribute: 'spunk',
        school: '唐门',
    },
    惊羽诀: {
        primaryAttribute: 'strength',
        school: '唐门',
    },
    焚影圣诀: {
        primaryAttribute: 'spunk',
        school: '明教',
    },
    明尊琉璃体: {
        primaryAttribute: 'vitality',
        school: '明教',
    },
    笑尘诀: {
        primaryAttribute: 'strength',
        school: '丐帮',
    },
    分山劲: {
        primaryAttribute: 'agility',
        school: '苍云',
    },
    铁骨衣: {
        primaryAttribute: 'vitality',
        school: '苍云',
    },
    相知: {
        primaryAttribute: 'heal',
        school: '长歌',
    },
    莫问: {
        primaryAttribute: 'spirit',
        school: '长歌',
    },
    北傲诀: {
        primaryAttribute: 'strength',
        school: '霸刀',
    },
    凌海诀: {
        primaryAttribute: 'agility',
        school: '蓬莱',
    },
};
