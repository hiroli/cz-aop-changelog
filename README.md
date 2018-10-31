# cz-aop-changelog

Commitizen rules about aop for standardized commit msg

### commit-message规范：
* 参考Angular官方的commit-message规范，由`type`, `scope`, `subject`, `body`, `footer`部分组成
* `type`和`scope`各有一套枚举值，用于指明本次提交的`类型`和`影响面`，cr阶段会重点关注提交人是否对改动进行合理的拆分后再提交
* `subject`是本次提交的简要主题，字符数至少`8`个，最多`64`个，`不支持换行`，并以`.`号结尾
* `type`, `scope`, `subject`为`header`部分，占整个commit-message的第一行
* `body`是本次提交的详细描述，与`header`间隔`1`行，`body`部分至少`1`行，最多`2`行，每行字符数至少`8`个，最多`64`个
* `footer`是本次提交的icafe描述，与`body`间隔`1`行，`footer`部分只有`1`行，格式为`icafe: fc-native-thrd-<ID>`，可用`Tab`完成自动提示
* 使用`npm run commit`提交时，对上述规范都有校验，保证提交操作的高效和有效，其他提交方式请自行保证commit-message规范，否则无法通过最终的校验

#### `type`枚举值参 /src/types/index.js

#### `scope`枚举值参 /src/scopes/index.js