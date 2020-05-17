import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { purple } from '../utils/colors'
import { addEntry, receiveEntries } from '../actions'
import { timeToString, getDailyReminderValue } from '../utils/helpers'
import { fetchCalendarResults } from '../utils/Api'
import { connect } from 'react-redux'
import UdaciFitnessCalendar from 'udacifitness-calendar'

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

    renderItem = ({ today, ...metrics }, formattedDate, key) => (
        <View>
            {
                !today
                    ? <Text>{JSON.stringify(today)}</Text>
                    : <Text>{JSON.stringify(metrics)}</Text>
            }
        </View>
    )

    renderEmptyDate(formattedDate) {
        return <View>
            <Text>No data for this day.</Text>
        </View>
    }

    render() {
        const { entries } = this.props
        return (
            <View>
                <UdaciFitnessCalendar
                    items={entries}
                    renderItem={this.renderItem}
                    renderEmptyDate={this.renderEmptyDate}
                />
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
