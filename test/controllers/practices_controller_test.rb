require 'test_helper'

class PracticesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @practice = practices(:one)
  end

  test "should get index" do
    get practices_url
    assert_response :success
  end

  test "should create practice" do
    assert_difference('Practice.count') do
      post practices_url, params: { practice: { hash: @practice.hash, title: @practice.title } }
    end

    assert_response 201
  end

  test "should show practice" do
    get practice_url(@practice)
    assert_response :success
  end

  test "should update practice" do
    patch practice_url(@practice), params: { practice: { hash: @practice.hash, title: @practice.title } }
    assert_response 200
  end

  test "should destroy practice" do
    assert_difference('Practice.count', -1) do
      delete practice_url(@practice)
    end

    assert_response 204
  end
end
