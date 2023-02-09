interface Todo {
    id: string;
    content: string;
    isComplete: boolean;
    category: string;
    tags?: string[];
}

/** @function createList
 * @param {string} id 작성자 id
 * @param {string} content 게시물(todo) 내용
 * @param {boolean} isComplete 게시물(todo) 완료여부
 * @param {string} category 게시물(todo) 카테고리
 * @param {string[]} tags 게시물(todo) 태그
 */
const createList = ({ id, content, isComplete = false, category, tags }: Todo): void => {};

/** @function getLists
 * @returns {Todo[]} 게시물(todo) Lists
 */
const getLists = (): Todo[] => {
    return [
        {
            id: 'admin',
            content: 'typescript study',
            isComplete: true,
            category: 'study',
            tags: ['coding', 'bootcamp'],
        },
    ];
};

/** @function getList
 * @param {number} id 작성자 id
 * @returns {Todo} 게시물(todo) List
 */
const getList = (id: number): Todo => {
    return {
        id: 'admin',
        content: 'typescript study',
        isComplete: true,
        category: 'study',
        tags: ['coding', 'bootcamp'],
    };
};

/** @function updateList
 * @param {string} id 작성자 id
 * @param {string} content 게시물(todo) 내용
 * * @param {boolean} isComplete 게시물(todo) 완료여부
 * @param {string} category 게시물(todo) 카테고리
 * @param {string} tags 게시물(todo) 태그
 */
const updateList = ({ id, content, isComplete, category, tags }: Todo): void => {};

/** @function deleteList
 * @param {string} id 작성자 id
 */
const deleteList = (id: number): void => {};
