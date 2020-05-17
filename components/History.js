import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { purple } from '../utils/colors'
import { addEntry, receiveEntries } from '../actions'
import { timeToString, getDailyReminderValue } from '../utils/helpers'
import { fetchCalendarResults } from '../utils/Api'
import { connect } from 'react-redux'

class History extends React.Component {
    
    componentDidMount() {
        const { dispatch } = this.props

        fetchCalendarResults()
            .then((entries) => dispatch(receiveEntries(entries)))
            .then(({ entries }) => {
                const todaysKey = timeToString()
                const infoIsEnteredForToday = entries[todaysKey] !== undefined
                if(!infoIsEnteredForToday) {
                    dispatch(addEntry({
                        [todaysKey]: getDailyReminderValue()
                    }))
                }
            })
    }

    render() {
        return (
            <View>
                <Text>{JSON.stringify(this.props)}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})

function mapStateToProps(entries) {
    return {
        entries
    }
}

export default connect(mapStateToProps)(History)
