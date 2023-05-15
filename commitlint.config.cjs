module.exports = {
    extends: ['@commitlint/config-conventional'], rules: {
        'type-enum': [
            2,
            'always',
            [
                'feat',
                'fix',
                'design',
                'style',
                'refactor',
                'docs',
                'test',
                'etc',
                'chore',
                'revert',
            ],
        ],
    },
};
