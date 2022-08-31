import DraggableWrapper from '../dnd/DraggableWrapper';
import { Issue as JiraIssue } from '../../api/apiTypes';
import { useDisclosure } from '@chakra-ui/react';
import CreateIssueModel from './CreateIssueModel';

const Issue = ({ index, listIndex, name, id }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <DraggableWrapper
      className='mb-2 w-full rounded-sm bg-light-c-1 p-2 shadow-light-issue'
      index={index}
      draggableId={'issue-' + id}
    >
      <div>
        <span className='text-sm'>{name}</span>
      </div>
    </DraggableWrapper>
  );
};

export default Issue;

interface Props extends JiraIssue {
  listIndex: number;
  index: number;
}
