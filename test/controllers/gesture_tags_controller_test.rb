require 'test_helper'

class GestureTagsControllerTest < ActionController::TestCase
  setup do
    @gesture_tag = gesture_tags(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:gesture_tags)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create gesture_tag" do
    assert_difference('GestureTag.count') do
      post :create, gesture_tag: {  }
    end

    assert_redirected_to gesture_tag_path(assigns(:gesture_tag))
  end

  test "should show gesture_tag" do
    get :show, id: @gesture_tag
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @gesture_tag
    assert_response :success
  end

  test "should update gesture_tag" do
    patch :update, id: @gesture_tag, gesture_tag: {  }
    assert_redirected_to gesture_tag_path(assigns(:gesture_tag))
  end

  test "should destroy gesture_tag" do
    assert_difference('GestureTag.count', -1) do
      delete :destroy, id: @gesture_tag
    end

    assert_redirected_to gesture_tags_path
  end
end
