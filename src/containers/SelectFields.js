import { connect } from 'react-redux';
import { addTodo, getModels } from '../actions';
import SelectFields from '../components/SelectFields';

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  onMakeSelected: make => dispatch(addTodo()),
  onModelsGet: make => dispatch(getModels(make)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectFields);
