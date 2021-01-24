import React, { useEffect } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { getIsPostsLoading, getPosts, getPostsError, loadPosts } from './store/ducks/posts';
import EmptyScreen from './components/EmptyScreen';
import Loader from './components/Loader';
import PostItem from './components/PostItem';
import BaseScreen from './components/BaseScreen';
import { useLogin } from './store/ducks/auth';

const FeedScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const posts = useSelector(getPosts)
    const error = useSelector(getPostsError)
    const isLoading = useSelector(getIsPostsLoading)
    const login = useLogin()

    const renderItem = ({ item }) => <PostItem {...item} />

    useEffect(() => {
        dispatch(loadPosts())
    }, [])

    useEffect(() => {
        if (!login) {
            navigation.navigate('Auth')
        }
    }, [login])

    if (error) {
        return <EmptyScreen text="An error occurred." />
    }

    if (isLoading) {
        return <Loader/>
    }

    return (
        <BaseScreen>
            <FlatList
                contentContainerStyle={styles.listContent}
                data={posts}
                ListEmptyComponent={<EmptyScreen />}
                renderItem={renderItem}
                keyExtractor={post => `${post.id}`}
            />
        </BaseScreen>
    )
}

const styles = StyleSheet.create({
    listContent: {
        minHeight: '100%',
        paddingBottom: 32,
    },
})

export default FeedScreen
